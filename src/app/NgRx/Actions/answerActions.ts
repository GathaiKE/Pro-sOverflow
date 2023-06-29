import { createAction, props } from "@ngrx/store";
import { Answer, AnswerRequest, PostAnswerSuccess, UpdateAnswerSuccess } from "src/app/Interfaces/questionInterfaces";

//Post Answer
export const postAnswer=createAction('[Question]-PostAnswer',props<{question_id:string,answer:AnswerRequest}>())
export const postAnswerSuccess=createAction('[Question]-PostAnswerSuccess',props<{message:PostAnswerSuccess}>())
export const postAnswerFailure=createAction('[Question]-PostAnswerFailure',props<{error:string}>())

//Get All Answers
export const getAnswers=createAction('[Questions]-GetAnswers')
export const getAnswersSuccess=createAction('[Question]-GetAnswerSuccess',props<{answers:Answer[]}>())
export const getAnswerFailure=createAction('[Question]-GetAnswerFailure',props<{error:string}>())

//GetSingleQuestionAnswers
export const GetSingleQuestionAnswers=createAction('[Answer]-GetSingleQuestionAnswers',props<{question_id:string}>())

//UpdateAnswer
export const updateAnswer=createAction('[Question]-UpdateAnswer',props<{answer_id:string,answer:AnswerRequest}>())
export const updateAnswerSuccess=createAction('[Question]-UpdateAnswerSuccess',props<{message:UpdateAnswerSuccess}>())
export const updateAnswerFailure=createAction('[Question]-UpdateAnswerFailure',props<{error:string}>())

//DeleteAnswer
export const deleteAnswer=createAction('[Queation]-DeleteAnswer',props<{answer_id:string}>())
export const deleteAnswerSuccess=createAction('[Question]-DeleteAnswerSuccess',props<{message:string}>())
export const deleteAnswerFailure=createAction('[Question]-DeleteAnswerFailure',props<{error:string}>())

//Upvote Answer
export const upvoteAnswer=createAction('[Question]-UpvoteAnswer',props<{answer_id:string}>())
export const upvoteSuccess=createAction('[Question]-UpvoteAnswerSuccess',props<{message:string}>())
export const upvoteFailure=createAction('[Question]-UpvoteAnswerFailure',props<{error:string}>())

//Downvote Answer
export const downvoteAnswer=createAction('[Question]-DownvoteAnswer',props<{answer_id:string}>())
export const downvoteSuccess=createAction('[Question]-DownvoteAnswerSuccess',props<{message:string}>())
export const downvoteFailure=createAction('[Question]-DownvoteAnswerFailure',props<{error:string}>())

//Accept Answer
export const acceptAnswer=createAction('[Question]-AcceptAnswer',props<{answer_id:string}>())
export const acceptSuccess=createAction('[Question]-AcceptAnswerSuccess',props<{message:string}>())
export const acceptFailure=createAction('[Question]-AcceptAnswerFailure',props<{error:string}>())

//Get SingleQuestionAnswer
export const getAnsByQuest=createAction('[Question]-GetAnsByQuest')
export const getAnsByQuestSuccess=createAction('[Question]-GetAnsByQuestSuccess',props<{question_id:string}>())
export const getAnsByQuestFailure=createAction('[Question]-GetAnsByQuestFailure',props<{error:string}>())

//Post comment
export const postComment=createAction('[Question]-PostComment',props<{answer_id:string,comment:string}>())
export const postCommentSuccess=createAction('[Question]-PostCommentSuccess',props<{message:string}>())
export const postCommentFailure=createAction('[Question]-PostCommentFailure',props<{error:string}>())