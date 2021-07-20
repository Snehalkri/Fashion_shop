import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { ProductService } from '../services/product.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

interface HTMLInputElement{
  files:string
}


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form:FormGroup;
  imageData:string;
  constructor(public userService: UserService, private router: Router,
     public productService: ProductService, public dialog: MatDialog) {
        this.userService.getUserProfile()  
  }
 
   ngOnInit(): void {
    this.form = new FormGroup({
      image:new FormControl(null)
    })
  }
  
  onSubmit(signUpForm:NgForm){
    console.log(signUpForm.value);
    this.userService.updateUserDetails(signUpForm.value).subscribe((res)=>{
      console.log(res);
      this.userService.getUserProfile()
    } , (err)=>{
      console.log(err);
    });
  }
  
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  
  // url="./assets/img/logo.jpg";
  selectedFile(e:Event){
     const file:any = (event.target as unknown as HTMLInputElement).files[0];
    this.form.patchValue({image:file})
    const allowType:any = ["image/png" , "image/jpeg" , "image/jpg"];
    if(file && allowType.includes(file.type)){
      const reader = new FileReader()
      reader.onload = () =>{
        this.imageData =  reader.result as string
      }
      reader.readAsDataURL(file)
    }

  }



  upload(){
    console.log(this.form.value.image);
    this.userService.uploadImage(this.form.value.image);
    this.userService.getUserProfile();
    this.imageData = "./assets/img/logo.jpg"
  }
}
