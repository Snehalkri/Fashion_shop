import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName:null,
    email: '',
    password: '',
    mobile: '',
    dob: '',
    address:'',
    img:''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }
//post req to nodejs api we will get jwt token in signin
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }
  public userDetails:any;
  getUserProfile() {
    this.http.get(environment.apiBaseUrl + '/userProfile').subscribe(
       res => {
        this.userDetails = res['user'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);

      }
    );
  }
  
  getUserDetails() {
    return this.http.get(environment.apiBaseUrl + '/procced');
  }
  
  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
public imagePath = "assets/img/images.png";
   uploadImage(image:File){
    console.log('service',image);
    
     let formData = new FormData();
     formData.append("image" , image);
     console.log(formData);
    
     this.http.put(environment.apiBaseUrl+'/userImage' , formData).subscribe(
       (res)=>{
        console.log(res)
        this.imagePath = res.img;
    } , (err)=>{
       console.log(err);
     })
   }
  updateUserDetails(userData:any){
    // let user_id = 
    return this.http.put(`http://localhost:3000/api/userUpdate` , userData)
  }
}