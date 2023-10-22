import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import { LoginComponent } from './login/login.component';
// @ts-ignore
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
