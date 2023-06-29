import { createAction, props } from "@ngrx/store";
import { NewQuestion, PostQuestionSuccess, Question, TagSuccess, UpdateQuestionSuccess, UpdatedQuestion } from "src/app/Interfaces/questionInterfaces";

//Get All Questions
export const getQuestions=createAction('[Questions]-GetQuestions')
export const getQuestionSuccess=createAction('[Questions]-GetQuestionSuccess',props<{questions:Question[]}>())
export const getQuestionFailure=createAction('[Questions]-GetQuestionsFailure',props<{error:string}>())

//Get a single question
export const getSingleQuestion=createAction('[Questions]-GetSingleQuestion',props<{question_id:string}>())

//Get Questions fro user
export const getUserQuestions=createAction('[Questions]-GetUserQuestions')
export const getUserQuestionsSuccess=createAction('[Questions]-GetUserQuestionsSuccess',props<{questions:Question[]}>())
export const getUserQuestionsFailure=createAction('[Questions]-GetUserQuestionsFailure',props<{error:string}>())

//Post a Qustion
export const postQuestion=createAction('[Question]-PostQuestion',props<{question:NewQuestion}>())
export const postQuestionSuccess=createAction('[Question]-PostQuestionSuccess',props<{message:string}>())
export const postQuestionFailure=createAction('[Question]-PostQuestionFailure',props<{error:string}>())

//UpdateQuestion
export const updateQuestion=createAction('[Question]-UpdateQuestion',props<{question_id:string,updatedQuestion:Question}>())
export const updateQuestionSuccess=createAction('[Question]-UpdateQuestionSuccess',props<{message:UpdateQuestionSuccess}>())
export const updateQuestionFailure=createAction('[Question]-UpdateQuestionFailure',props<{error:string}>())

//DeleteQuestion
export const deleteQuestion=createAction('[Question]-DeleteQuestion',props<{question_id:string}>())
export const deleteQuestionSuccess=createAction('[Question]-DeleteQuestionSuccess',props<{message:string}>())
export const deleteQuestionFailure=createAction('[Question]-DeleteQuestionFailure',props<{error:string}>())

//Get Tags
export const getTags=createAction('[Question]-GetTags')
export const getTagsSuccess=createAction('[Question]-GetTagsSuccess',props<{Tags:TagSuccess[]}>())
export const getTagsFailure=createAction('[Question]-GetTagsFailure',props<{error:string}>())
