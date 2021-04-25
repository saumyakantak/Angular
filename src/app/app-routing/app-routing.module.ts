import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const routes:Routes =[
  {path: 'list', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
  //exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactComponent, LoginComponent, SignupComponent]