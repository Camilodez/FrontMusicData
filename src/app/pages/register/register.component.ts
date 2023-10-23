import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countryError: boolean = false;
  registerButton: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.minLength(3)],
        country: ['', [Validators.required, Validators.minLength(1)]],
      birthdate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$')
    ]],
      accept: [false, [Validators.requiredTrue]]
  });
  }

  ngOnInit() {
    this.registerButton = document.getElementById('registerButton');
  }

  submit() {
    if (this.registerForm.valid) {
      // Validar que el nombre no contenga números
      // @ts-ignore
      if (this.registerForm.get('fullname').value.match(/\d/)) {
        // @ts-ignore
        this.registerForm.get('fullname').setErrors({ containsNumbers: true });
        return;
      }

      // Validar que el correo electrónico contenga un @
      // @ts-ignore
      if (!this.registerForm.get('email').value.includes('@')) {
        // @ts-ignore
        this.registerForm.get('email').setErrors({ invalidEmail: true });
        return;
      }

      // @ts-ignore
      if (!this.registerForm.get('country').value) {
        this.countryError = true;
        return;
      } else {
        this.countryError = false;
      }

      // Validar la fecha de nacimiento
      // @ts-ignore
      const birthdate = new Date(this.registerForm.get('birthdate').value);
      const currentDate = new Date();
      const minAgeDate = new Date();
      minAgeDate.setFullYear(currentDate.getFullYear() - 13); // Mínimo 13 años de edad
      if (birthdate > minAgeDate) {
        // @ts-ignore
        this.registerForm.get('birthdate').setErrors({ invalidBirthdate: true });
        return;
      }

      // Lógica para el resto del formulario y la creación del usuario en el servidor
    }
  }
}
