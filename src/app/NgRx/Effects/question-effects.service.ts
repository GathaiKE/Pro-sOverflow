import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuestionsService } from 'src/app/Services/questions.service';
import * as QuestionActions from '../Actions/questionActions'
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionEffectsService {

  constructor(private action$:Actions, private QuestionService:QuestionsService) { }

  getQuestions=createEffect(()=>{
    return this.action$.pipe(
      ofType(QuestionActions.getQuestions),
      mergeMap(()=> this.QuestionService.getQuestions().pipe(
        map(question=>QuestionActions.getQuestionSuccess({questions:question}))
      )),
      catchError(err=> of(QuestionActions.getQuestionFailure({error:err})))
    )
  })
}
