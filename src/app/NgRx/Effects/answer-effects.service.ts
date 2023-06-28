import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AnswersService } from 'src/app/Services/answers.service';
import * as AnswerActions from '../Actions/answerActions'
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AnswerEffectsService {

  constructor(private AnswerService:AnswersService, private action$:Actions, private Store:Store) { }

  getAnswers=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.getAnswers),
      mergeMap(()=> this.AnswerService.getAnswers().pipe(
        map(answer=> AnswerActions.getAnswersSuccess({answers:answer}))
      )),
      catchError(err=> of(AnswerActions.getAnswerFailure({error:err})))
    )
  })

  postAnswer$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.postAnswer),
      mergeMap(action=> this.AnswerService.postAnswer(action.answer,action.question_id).pipe(
        tap(a=> console.log(a)
        ),
        
        map(message=> AnswerActions.postAnswerSuccess({message})),
      )),
      catchError(err=> of(AnswerActions.postAnswerFailure(err)))
    )
  })
}
