import { createAction, props } from "@ngrx/store";
import { NewQuestion, Question, UpdatedQuestion } from "src/app/Interfaces/questionInterfaces";

//Get All Questions
export const getQuestions=createAction('[Questions]-GetQuestions')
export const getQuestionSuccess=createAction('[Questions]-GetQuestionSuccess',props<{questions:Question[]}>())
export const getQuestionFailure=createAction('[Questions]-GetQuestionsFailure',props<{error:string}>())

//Get a single question
export const getSingleQuestion=createAction('[Questions]-GetSingleQuestion',props<{question_id:string}>())

//Post a Qustion
export const postQuestion=createAction('[Question]-PostQuestion',props<{question:NewQuestion}>())
export const postQuestionSuccess=createAction('[Question]-PostQuestionSuccess',props<{message:string}>())
export const postQuestionFailure=createAction('[Question]-PostQuestionFailure',props<{error:string}>())

//UpdateQuestion
export const updateQuestion=createAction('[Question]-UpdateQuestion',props<{updatedQuestion:UpdatedQuestion}>())
export const updateQuestionSuccess=createAction('[Question]-UpdateQuestionSuccess',props<{mesage:string}>())
export const updateQuestionFailure=createAction('[Question]-UpdateQuestionFailure',props<{error:string}>())

//DeleteQuestion
export const deleteQuestion=createAction('[Question]-DeleteQuestion',props<{question_id:string}>())
export const deleteQuestionSuccess=createAction('[Question]-DeleteQuestionSuccess',props<{message:string}>())
export const deleteQuestionFailure=createAction('[Question]-DeleteQuestionFailure',props<{error:string}>())
