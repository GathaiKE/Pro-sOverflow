import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AnswersService } from 'src/app/Services/answers.service';
import * as AnswerActions from '../Actions/answerActions'
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerEffectsService {

  constructor(private AnswerService:AnswersService, private action$:Actions) { }

  getAnswers=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.getAnswers),
      mergeMap(()=> this.AnswerService.getAnswers().pipe(
        map(answer=> AnswerActions.getAnswersSuccess({answers:answer}))
      )),
      catchError(err=> of(AnswerActions.getAnswerFailure({error:err})))
    )
  })
}
