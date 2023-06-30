import { createAction, props } from "@ngrx/store";
import { Comment } from "src/app/Interfaces/questionInterfaces";

//Post Comment
export const postComment=createAction('[Question]-PostComment',props<{comment:Comment}>())
export const postCommentSuccess=createAction('[Question]-PostCommentSuccess',props<{message:string}>())
export const postCommentFailure=createAction('[Question]-PostCommentFailure',props<{error:string}>())

//Delete comment
export const deleteComment=createAction('[Question]-DeleteComment',props<{comment_id:string}>())
export const deleteCommentSuccess=createAction('[Question]-DeleteCommentSuccess',props<{message:string}>())
export const deleteCommentFailure=createAction('[Question]-DeleteCommentFailure',props<{error:string}>())

//Get Comments by Answer_Id
export const getAnsComments=createAction('[Question]-GetAnsComments',props<{answer_id:string}>())
export const getAnsCommentsSuccess=createAction('[Question]-GetAnsCommentsSuccess',props<{Comments:Comment[]}>())
export const getAnsCommentsFailure=createAction('[Question]-GetAnsCommentsFailure',props<{error:string}>())

//Update comment
export const updateComment=createAction('[Question]-UpdateComment',props<{comment_id:string,updatedComment:Comment}>())
export const updateCommentSuccess=createAction('[Question]-UpdateCommentSuccess',props<{message:string}>())
export const updateCommentFailure=createAction('[Question]-UpdateCommentFailure',props<{error:string}>())

//Get All Comments
export const getAllComments=createAction('[Comments]-GetAllComments')
export const getAllCommentsSuccess=createAction('[Comments]-GetAllCommentsSuccess',props<{comments:Comment[]}>())
export const getAllCommentsFailure=createAction('[Comments]-GetAllCommentsFailure',props<{error:string}>())

//Get Single Answer Comments
export const getSingleAnswerComments=createAction('[comments]-GetSingeAnswerComments',props<{answer_id:string}>())