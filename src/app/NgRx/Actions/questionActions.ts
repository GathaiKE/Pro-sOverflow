import { createAction, props } from "@ngrx/store";
import { Question } from "src/app/Interfaces/questionInterfaces";

//Get All Questions
export const getQuestions=createAction('[Questions]-GetQuestions')
export const getQuestionSuccess=createAction('[Questions]-GetQuestionSuccess',props<{questions:Question[]}>())
export const getQuestionFailure=createAction('[Questions]-GetQuestionsFailure',props<{error:string}>())

//Get a single question
export const getSingleQuestion=createAction('[Questions]-GetSingleQuestion',props<{question_id:string}>())

//Post a Qustion
export const postQuestion=createAction('[Question]-PostQuestion')
export const postQuestionSuccess=createAction('[Question]-PostQuestionSuccess',props<{question:Question}>())
export const postQuestionFailure=createAction('[Question]-PostQuestionFailure',props<{error:string}>())

//UpdateQuestion
export const updateQuestion=createAction('[Question]-UpdateQuestion')
export const updateQuestionSuccess=createAction('[Question]-UpdateQuestionSuccess',props<{question:Question}>())
export const updateQuestionFailure=createAction('[Question]-UpdateQuestionFailure',props<{error:string}>())

//DeleteQuestion
export const deleteQuestion=createAction('[Question]-DeleteQuestion')
export const deleteQuestionSuccess=createAction('[Question]-DeleteQuestionSuccess',props<{question_id:string}>())
export const deleteQuestionFailure=createAction('[Question]-DeleteQuestionFailure',props<{error:string}>())
