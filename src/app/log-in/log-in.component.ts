import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../NgRx/Actions/userActions'
import { getAuthStatus, getRole } from '../NgRx/Reducers/userReducer';
import {take} from 'rxjs'

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
constructor(private Store:Store, private Router:Router){}

  submit(form:NgForm){
      console.log(form.value);
      this.Store.dispatch(UserActions.logIn(form.value))
  }

  // isLoggedIn(){
  //   this.Store.select(getAuthStatus)?this.Router.navigate(['/home']):this.Router.navigate(['/logIn'])
  // }

  isLoggedIn(): void {
    this.Store.select(getAuthStatus).pipe(take(1)).subscribe(authStatus => {
        authStatus?this.Router.navigate(['/home']): this.Router.navigate(['/login']);
      })
  }

  
}
