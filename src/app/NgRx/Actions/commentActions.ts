import { createEffect } from "@ngrx/effects";
import { createAction, props } from "@ngrx/store";

//Post Comment
export const postComment=createAction('[Question]-PostComment')
export const postCommentSuccess=createAction('[Question]-PostCommentSuccess',props<{comment:Comment}>())
export const postCommentFailure=createAction('[Question]-PostCommentFailure',props<{error:string}>())

//Delete comment
export const deleteComment=createAction('[Question]-DeleteComment')
export const deleteCommentSuccess=createAction('[Question]-DeleteCommentSuccess',props<{comment_id:string}>())
export const deleteCommentFailure=createAction('[Question]-DeleteCommentFailure',props<{error:string}>())

//Get Comments by Answer_Id
export const getAnsComments=createAction('[Question]-GetAnsComments')
export const getAnsCommentsSuccess=createAction('[Question]-GetAnsCommentsSuccess',props<{answer_id:string}>())
export const getAnsCommentsFailure=createAction('[Question]-GetAnsCommentsFailure',props<{error:string}>())

//Update comment
export const updateComment=createAction('[Question]-UpdateComment')
export const updateCommentSuccess=createAction('[Question]-UpdateCommentSuccess',props<{comment_id:string}>())
export const updateCommentFailure=createAction('[Question]-UpdateCommentFailure',props<{error:string}>())