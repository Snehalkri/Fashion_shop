// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

//routes
//import { appRoutes } from './routes';
//import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import 'hammerjs';
import { ProductService } from './services/product.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CartComponent } from './cart/cart.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { DressComponent } from './dress/dress.component';
import { HeaderComponent } from './header/header.component';
import { BagComponent } from './bag/bag.component';
import { MakeupComponent } from './makeup/makeup.component';
import { PaymentComponent } from './payment/payment.component';
import { ProccedComponent } from './procced/procced.component';
import { SchedularComponent } from './schedular/schedular.component';
import { WatchComponent } from './watch/watch.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataTablesModule } from "angular-datatables";
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { FooterComponent } from './footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    ProductComponent,
    ProductdetailComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CartComponent,
    DressComponent,
    HeaderComponent,
    BagComponent,
    MakeupComponent,
    PaymentComponent,
    ProccedComponent,
    SchedularComponent,
    WatchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatToolbarModule,
    DataTablesModule,
    ScheduleModule,
    MatProgressSpinnerModule
],
  providers: [ProductService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }