import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  create(user: {
    fullname: string;
    country: string;
    birthdate: string;
    email: string;
    password: string;
  }) {
    return {
      id: 1,
      fullname: user.fullname,
      country: user.country,
      birthdate: user.birthdate,
      email: user.email,
      password: user.password
    };
  }
}
