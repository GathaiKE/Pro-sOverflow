import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'src/app/Services/users.service';
import * as UserActions from '../Actions/userActions'
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../AppState';
import { getAuthStatus } from '../Reducers/userReducer';

@Injectable({
  providedIn: 'root'
})
export class UserEffectaService {

  constructor(private UserService:UsersService, private action$:Actions, private router:Router, private store:Store<AppState>) { }


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
        
        return this.UserService.logIn({email:action.email,password:action.password}).pipe(
          map(res=> {    
            localStorage.setItem('token',res.token)
            localStorage.setItem('role',res.role)
            
            return UserActions.logInSuccess({message:res.message,token:res.token,role:res.role,email:res.email,profile_pic:res.profile_pic,first_name:res.first_name,second_name:res.second_name,user_id:res.user_id})
          }),
          tap(()=> this.store.select(getAuthStatus) ? this.router.navigate(['/home']) : ''),
          catchError(err=>of(UserActions.logInFailure({error:err.error.message})))
        )
      })
    )
  })

  getSingleUser$=createEffect(()=>{
    return this.action$.pipe(
      ofType(UserActions.getLoggedUser),
      mergeMap(action=> this.UserService.getUser().pipe(
        map(user=> UserActions.getLoggedUserSuccess({user}))
      )),
      catchError(error=> of(UserActions.getLoggedUserFailure({error})))
    )
  })

  updateUser$=createEffect(()=>{
    return this.action$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(action=>this.UserService.updateUser(action.user).pipe(
        map(message=>UserActions.updateUserSuccess({message:message})),
        tap(()=> this.store.dispatch(UserActions.getLoggedUser()))
      )),
      catchError(error=> of(UserActions.updateUserFailure(error)))
    )
  })
}
