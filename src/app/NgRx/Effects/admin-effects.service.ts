import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../AppState';
import * as AdminActions from '../Actions/AdminActions'
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { AdminServicesService } from 'src/app/Services/admin-services.service';


@Injectable({
  providedIn: 'root'
})
export class AdminEffectsService {

  constructor(private AdminService:AdminServicesService, private action$:Actions, private router:Router, private store:Store<AppState>) { }

  selectedUserQuestions$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AdminActions.SelectedUserQuestions),
      switchMap(action=> this.AdminService.selectedUserQuestions(action.user_id).pipe(
          map(questions =>AdminActions.SelectedUserQuestionsSuccess({questions})
          ),
          catchError(err=>of(AdminActions.SelectedUserQuestionsFailure({error:err})))
        )
      )
    )
  })


  getUsers$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AdminActions.getAllUsers),
      mergeMap(action=> this.AdminService.getUsers().pipe(
        map(users=> AdminActions.getAllUsersSuccess({users}))
      )),
      catchError(error=> of(AdminActions.getAllUsersFailure({error})))
    )
  })

  remove$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AdminActions.revoke),
      mergeMap(action=> this.AdminService.removeUser(action.user_id).pipe(
        map(message=> AdminActions.revokeSuccess({message})),
        
        tap(action=> this.store.dispatch(AdminActions.getAllUsers())
        )
      )),
      catchError(error=> of(AdminActions.revokeFailure({error})))
    )
  })
}
