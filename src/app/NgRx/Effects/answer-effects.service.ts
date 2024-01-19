import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AnswersService } from 'src/app/Services/answers.service';
import * as AnswerActions from '../Actions/answerActions'
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommentsService } from 'src/app/Services/comments.service';
import { getAnswersSuccess, getQuestAnswers } from '../Reducers/answerReducers';

@Injectable({
  providedIn: 'root'
})
export class AnswerEffectsService {

  constructor(private AnswerService:AnswersService,private CommentsService:CommentsService, private action$:Actions, private Store:Store) { }

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
        map(message=> AnswerActions.postAnswerSuccess({message})),
        tap(()=> AnswerActions.getAnswers()),
        tap(()=> this.Store.select(getAnswersSuccess)),
        tap(()=> this.Store.select(getQuestAnswers))
      )),
      catchError(err=> of(AnswerActions.postAnswerFailure(err)))
    )
  })

  postComment$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.postComment),
      mergeMap(action=> this.CommentsService.postComment(action.answer_id,action.comment).pipe(
        map(message=> AnswerActions.postCommentSuccess({message}))
      )),
      catchError(error=> of(AnswerActions.postCommentFailure(error)))
    )
  })


  upvote$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.upvoteAnswer),
      mergeMap(action=> this.AnswerService.upvoteAnswer(action.answer_id).pipe(
        map(message=> AnswerActions.upvoteSuccess({message}))
      )),
      catchError(error=>of(AnswerActions.upvoteFailure({error})))
    )
  })


  downvote$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.downvoteAnswer),
      mergeMap(action=> this.AnswerService.downvoteAnswer(action.answer_id).pipe(
        map(message=> AnswerActions.upvoteSuccess({message}))
      )),
      catchError(error=>of(AnswerActions.upvoteFailure({error})))
    )
  })


  acceptAnswer$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.acceptAnswer),
      mergeMap(action=> this.AnswerService.acceptAnswer(action.answer_id).pipe(
        map(message=> AnswerActions.upvoteSuccess({message})),
        tap((message)=> console.log(message)
        )
      )),
      catchError(error=>of(AnswerActions.upvoteFailure({error})))
    )
  })

  updateAnswer$=createEffect(()=>{
    return this.action$.pipe(
      ofType(AnswerActions.updateAnswer),
      mergeMap(action=>this.AnswerService.updateAnswer(action.answer_id,action.answer).pipe(
        map(message=> AnswerActions.updateAnswerSuccess({message}))
      )),
      catchError(error=> of(AnswerActions.updateAnswerFailure(error)))
    )
  })
}
