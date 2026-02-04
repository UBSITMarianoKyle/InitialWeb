import { ComponentRef } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './parts/home/home.component';
import { NaviComponent } from './parts/navi/navi.component';
import { UserProfileComponent } from './AccctSettings/user-profile/user-profile.component';
import { PaymentInfoComponent } from './AccctSettings/payment-info/payment-info.component';

export const routes: Routes = [
    {path:'Home',
    component:HomeComponent
    },
    {path:'Userbio',
    component:UserProfileComponent}
,
    {path:'User Profile',
    component:UserProfileComponent},
   
    {path:'Paymentinfo',
    component:PaymentInfoComponent}











];
