import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {ConfirmRegisterPageComponent} from "./confirm-register-page/confirm-register-page.component";
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

// const routes: Routes = [
//   {path: '',component: ConfirmRegisterPageComponent,
//     children:[
//       {path: 'confirm-register',component: ConfirmRegisterPageComponent},
//       {path: 'register',component: RegisterPageComponent},
//     ]
//   },
// ];

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'confirm-register', component: ConfirmRegisterPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }



