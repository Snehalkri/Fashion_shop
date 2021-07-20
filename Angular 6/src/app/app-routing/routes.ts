import { Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { SignUpComponent } from '../user/sign-up/sign-up.component';
import { SignInComponent } from '../user/sign-in/sign-in.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { CartComponent } from '../cart/cart.component';
import { AuthGuard } from '../auth/auth.guard';
import { DressComponent } from './../dress/dress.component';
import { SchedularComponent } from './../schedular/schedular.component';
import { PaymentComponent } from '../payment/payment.component';
import { MakeupComponent } from '../makeup/makeup.component';
import { BagComponent } from '../bag/bag.component';
import { WatchComponent } from '../watch/watch.component';
import { ProccedComponent } from '../procced/procced.component';

export const routes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'cart', component: CartComponent,canActivate:[AuthGuard]
    },
    {
        path: 'product', component: ProductComponent
    },
    {
        path: 'productdetail/:id', component: ProductdetailComponent,canActivate:[AuthGuard]
    },
    {
        path: 'procced', component: ProccedComponent,canActivate:[AuthGuard]
    },
    {
        path: 'schedular', component: SchedularComponent,canActivate:[AuthGuard]
    },
    {
        path: 'dress', component: DressComponent,canActivate:[AuthGuard]
    },
    {
        path: 'payment', component: PaymentComponent,canActivate:[AuthGuard]
    },
    {
        path: 'makeup', component: MakeupComponent,canActivate:[AuthGuard]
    },
    {
        path: 'bag', component: BagComponent,canActivate:[AuthGuard]
    },
    {
        path: 'watch', component: WatchComponent,canActivate:[AuthGuard]
    },
    {
        path: '', component: HomeComponent
    }
   
];