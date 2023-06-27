import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'src/app/Services/users.service';
import * as UserActions from '../Actions/userActions'
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserEffectaService {

  constructor(private UserService:UsersService, private action$:Actions, private router:Router) { }


  register$=createEffect(()=>{
    return this.action$.pipe(
      ofType(UserActions.register),
      mergeMap(action=> this.UserService.register({profile_pic:action.profile_pic,first_name:action.first_name,second_name:action.last_name,email:action.email,password:action.password}).pipe(
        map(message=>{
          this.router.navigate(['/logIn'])
          return UserActions.registerSuccess({message:message.message})
        })
      )),
      catchError(err=> of(UserActions.registerFailure({error:err.error})))
    )
  })

  logIn$=createEffect(()=>{
    return this.action$.pipe(
      ofType(UserActions.logIn),
      switchMap(action=> {
        console.log(action);
        
        return this.UserService.logIn({email:action.email,password:action.password}).pipe(
          map(res=> {    
            localStorage.setItem('token',res.token)
            localStorage.setItem('role',res.role)
            localStorage.setItem('username',res.username)
            return UserActions.logInSuccess({message:res.message,token:res.token,role:res.role})
          }),
          catchError(err=>of(UserActions.logInFailure({error:err})))
        )
      })
    )
  })
}
