import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Question } from "src/app/Interfaces/questionInterfaces";
import * as QuestionActions from '../Actions/questionActions'

export interface questionReducerInterface{
    questions:Question[]
    error:string
    question_id:string
    postQuestionSuccess:string
    postQuestionFailure:string
    updateQuestionSuccess:string
    updateQuestionFailure:string
    deleteQuestionSuccess:string
    deleteQuestionFailure:string
}

const initialState:questionReducerInterface={
    questions:[],
    error:"",
    question_id:"",
    postQuestionSuccess:"",
    postQuestionFailure:"",
    updateQuestionSuccess:"",
    updateQuestionFailure:"",
    deleteQuestionSuccess:"",
    deleteQuestionFailure:""
}

export const QuestionsReducer=createReducer(
    initialState,


    on(QuestionActions.getQuestionSuccess, (state,action):questionReducerInterface=>{
        return {
            ...state,
            questions:action.questions,
            error:""
        }
    }),
    on(QuestionActions.getQuestionFailure,(state,action):questionReducerInterface=>{
        return {
            ...state,
            questions:[],
            error:action.error
        }
    }),

    on(QuestionActions.getSingleQuestion,(state,action):questionReducerInterface=>{
        return {
            ...state,
            question_id:action.question_id
        }
    }),

    on(QuestionActions.postQuestionSuccess, (state,action):questionReducerInterface=>{
        return {
            ...state,
            postQuestionSuccess:action.message,
            postQuestionFailure:""
        }
    }),

    on(QuestionActions.postQuestionFailure, (state,action):questionReducerInterface=>{
        return {
            ...state,
            postQuestionSuccess:"",
            postQuestionFailure:action.error
        }
    }),

    on(QuestionActions.updateQuestionSuccess, (state,action):questionReducerInterface=>{
        return {
            ...state,
            updateQuestionFailure:"",
            updateQuestionSuccess:action.mesage
        }
    }),

    on(QuestionActions.updateQuestionFailure, (state,action):questionReducerInterface=>{
        return {
            ...state,
            updateQuestionFailure:action.error,
            updateQuestionSuccess:""
        }
    }),

    on(QuestionActions.deleteQuestionSuccess, (state,action):questionReducerInterface=>{
        return {
            ...state,
            deleteQuestionFailure:"",
            deleteQuestionSuccess:action.message
        }
    }),

    on(QuestionActions.deleteQuestionFailure, (state,action):questionReducerInterface=>{
        return {
            ...state,
            deleteQuestionFailure:action.error,
            deleteQuestionSuccess:""
        }
    })
)

const getQuestionState=createFeatureSelector<questionReducerInterface>('question')
export const getQuestions=createSelector(getQuestionState,(state)=>state.questions)
export const getQuestErr=createSelector(getQuestionState,(state)=>state.error)
export const getQuestById=createSelector(getQuestionState,(state)=>state.question_id)

export const getSingleQuestion=createSelector(getQuestions,getQuestById,(questions,question_id)=>{
    return questions.find(question=>question.question_id===question_id) as Question
})