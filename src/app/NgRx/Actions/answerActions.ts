import { createAction, props } from "@ngrx/store";
import { Answer } from "src/app/Interfaces/questionInterfaces";

//Post Answer
export const postAnswer=createAction('[Question]-PostAnswer')
export const postAnswerSuccess=createAction('[Question]-PostAnswerSuccess',props<{answer:Answer}>())
export const postAnswerFailure=createAction('[Question]-PostAnswerFailure',props<{error:string}>())

//Get All Answers
export const getAnswers=createAction('[Questions]-GetAnswers')
export const getAnswersSuccess=createAction('[Question]-GetAnswerSuccess',props<{answers:Answer[]}>())
export const getAnswerFailure=createAction('[Question]-GetAnswerFailure',props<{error:string}>())

//GetSingleQuestionAnswers
export const GetSingleQuestionAnswers=createAction('[Answer]-GetSingleQuestionAnswers',props<{question_id:string}>())

//UpdateAnswer
export const updateAnswer=createAction('[Question]-UpdateAnswer')
export const updateAnswerSuccess=createAction('[Question]-UpdateAnswerSuccess',props<{answer_id:string}>())
export const updateAnswerFailure=createAction('[Question]-UpdateAnswerFailure',props<{error:string}>())

//DeleteAnswer
export const deleteAnswer=createAction('[Queation]-DeleteAnswer')
export const deleteAnswerSuccess=createAction('[Question]-DeleteAnswerSuccess',props<{answer_id:string}>())
export const deleteAnswerFailure=createAction('[Question]-DeleteAnswerFailure',props<{error:string}>())

//Upvote Answer
export const upvoteAnswer=createAction('[Question]-UpvoteAnswer')
export const upvoteSuccess=createAction('[Question]-UpvoteAnswerSuccess',props<{answer_id:string}>())
export const upvoteFailure=createAction('[Question]-UpvoteAnswerFailure',props<{error:string}>())

//Downvote Answer
export const downvoteAnswer=createAction('[Question]-DownvoteAnswer')
export const downvoteSuccess=createAction('[Question]-DownvoteAnswerSuccess',props<{answer_id:string}>())
export const downvoteFailure=createAction('[Question]-DownvoteAnswerFailure',props<{error:string}>())

//Accept Answer
export const acceptAnswer=createAction('[Question]-AcceptAnswer')
export const acceptSuccess=createAction('[Question]-AcceptAnswerSuccess',props<{answer_id:string}>())
export const acceptFailure=createAction('[Question]-AcceptAnswerFailure',props<{error:string}>())

//Get SingleQuestionAnswer
export const getAnsByQuest=createAction('[Question]-GetAnsByQuest')
export const getAnsByQuestSuccess=createAction('[Question]-GetAnsByQuestSuccess',props<{question_id:string}>())
export const getAnsByQuestFailure=createAction('[Question]-GetAnsByQuestFailure',props<{error:string}>())