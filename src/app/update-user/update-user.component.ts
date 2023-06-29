import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AppState } from '../NgRx/AppState';
import { Store } from '@ngrx/store';
import * as UserActions from '../NgRx/Actions/userActions'
import { getSingleUser } from '../NgRx/Reducers/userReducer';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule,ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  form!:FormGroup

  constructor(private Store:Store<AppState>, private router:Router, private Route:ActivatedRoute, private fb:FormBuilder){}

  ngOnInit(): void {

    this.form = this.fb.group({
      profile_pic: ['', Validators.required],
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    })

    
    this.Route.params.subscribe((u:Params)=>{
      this.Store.dispatch(UserActions.getLoggedUser())
    })
  }

  submit(form:NgForm){
    this.Store.dispatch(UserActions.updateUser(form.value))
  }
}
