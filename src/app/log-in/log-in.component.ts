import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../NgRx/Actions/userActions'

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
form:any={
  email:"",
  password:""
}
constructor(private Store:Store){}

  submit(form:NgForm){
      console.log(form.value);
      this.Store.dispatch(UserActions.logIn(form.value))
  }
  
}
