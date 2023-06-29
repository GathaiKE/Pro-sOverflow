import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../NgRx/Actions/userActions'
import { AppState } from '../NgRx/AppState';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

form={
  profile_pic:"",
  first_name:"",
  last_name:"",
  email:"",
  password:""
}
constructor(private Store:Store<AppState>, private router:Router){}

  submit(form:NgForm){
    this.Store.dispatch(UserActions.register(form.value))
  }
}
