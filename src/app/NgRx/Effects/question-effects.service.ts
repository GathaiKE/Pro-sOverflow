import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuestionsService } from 'src/app/Services/questions.service';
import * as QuestionActions from '../Actions/questionActions'
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class QuestionEffectsService {

  constructor(private action$:Actions, private QuestionService:QuestionsService, private Store:Store) { }

  getQuestions$=createEffect(()=>{
    return this.action$.pipe(
      ofType(QuestionActions.getQuestions),
      mergeMap(()=> this.QuestionService.getQuestions().pipe(
        map(question=>QuestionActions.getQuestionSuccess({questions:question}))
      )),
      catchError(err=> {
        console.log(err);
        return of(QuestionActions.getQuestionFailure({error:err.error}))
        
      })
    )
  })

  postQuestion$=createEffect(()=>{
    return this.action$.pipe(
      ofType(QuestionActions.postQuestion),
      mergeMap(action=> this.QuestionService.postQueston(action.question).pipe(
        map(message=> QuestionActions.postQuestionSuccess({message}))
      )),
      catchError(error=> {
        console.log(error.error.message);
        
        return of(QuestionActions.postQuestionFailure({error}))
      })
    )
  })

  getUserQuestions$= createEffect(()=>{
    return this.action$.pipe(
      ofType(QuestionActions.getUserQuestions),
      mergeMap(action=> this.QuestionService.getUserQuestions().pipe(
        map(questions=> QuestionActions.getUserQuestionsSuccess({questions})),
        tap(question=> this.Store.dispatch(QuestionActions.getUserQuestions()))
      )),
      catchError(err=> {
        return of(QuestionActions.getUserQuestionsFailure({error:err.error}))
      })
    )
  })

  deleteUserQuestions=createEffect(()=>{
    return this.action$.pipe(
      ofType(QuestionActions.deleteQuestion),
      mergeMap(action=> this.QuestionService.deleteQuestion(action.question_id).pipe(
        map(message=> QuestionActions.deleteQuestionSuccess({message})),
        
        tap(action=> this.Store.dispatch(QuestionActions.getQuestions())
        )
      )),
      catchError(error=> of(QuestionActions.deleteQuestionFailure({error})))
    )
  })


  getTags$=createEffect(()=>{
    return this.action$.pipe(
      ofType(QuestionActions.getTags),
      mergeMap(action=> this.QuestionService.getTags().pipe(
        map(tags=> QuestionActions.getTagsSuccess({Tags:tags}))
      )),
      catchError(error=> of(QuestionActions.getTagsFailure({error})))
    )
  })

}
