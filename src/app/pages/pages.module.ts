import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ConfiguracionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
