import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../NgRx/Actions/userActions'
import { getAuthStatus, getLogError, getRole } from '../NgRx/Reducers/userReducer';
import {Observable, map, take} from 'rxjs'
import { LogInError } from '../Interfaces/userInterface';

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
error!:Observable<string>
constructor(private Store:Store, private Router:Router){}

  submit(form:NgForm){
      this.Store.dispatch(UserActions.logIn(form.value))
      this.error = this.Store.select(getLogError)
      
  }
  
  isLoggedIn(): void {
    this.Store.select(getAuthStatus).pipe(take(1)).subscribe(authStatus => {
      console.log(authStatus);
        authStatus?true: false
      })
  }

  
}
