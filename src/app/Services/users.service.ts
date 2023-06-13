import { Injectable } from '@angular/core';
import { User } from '../Interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor() { }
  Users:User[]=[
    {
      user_id:'1',
      profile_image:'../../assets/hero.jpeg',
      first_name:'Brian',
      last_name:'Gathai',
      email:'briannjeri9@gmail.com',
      role:'admin',
      password:'1234',
      website:'https://github.com/GathaiKE/E-Commerce-Nodejshttps://github.com/GathaiKE/E-Commerce-Nodejs'
    }
  ]
}
