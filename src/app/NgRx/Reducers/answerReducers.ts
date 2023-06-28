import { State, createFeatureSelector, createReducer,createSelector,on } from "@ngrx/store";
import { Answer } from "src/app/Interfaces/questionInterfaces";
import * as AnswerActions from '../Actions/answerActions'


export interface AnswerRedInterface{
    answers:Answer[]
    error:string
    question_id:string
    postAnswerSuccess:string
    postAnswerFailure:string
    updateAnswerSuccess:string
    updateAnswerFailure:string
    acceptSuccess:string
    acceptFailure:string
    upvoteSuccess:string
    upvoteFailure:string
    downvoteSuccess:string
    downvoteFailure:string
}

const initialState:AnswerRedInterface={
    answers:[],
    error:"",
    question_id:"",
    postAnswerSuccess:"",
    postAnswerFailure:"",
    updateAnswerSuccess:"",
    updateAnswerFailure:"",
    acceptSuccess:"",
    acceptFailure:"",
    upvoteSuccess:"",
    upvoteFailure:"",
    downvoteSuccess:"",
    downvoteFailure:""
}

export const answerReducer= createReducer(

    initialState,


    on(AnswerActions.getAnswersSuccess, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            answers:action.answers,
            error:""
        }
    }),

    on(AnswerActions.getAnswerFailure, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            answers:[],
            error:action.error
        }
    }),

    on(AnswerActions.GetSingleQuestionAnswers, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            question_id:action.question_id
        }
    }),

    on(AnswerActions.postAnswerSuccess, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            postAnswerFailure:"",
            postAnswerSuccess:action.message
        }
    }),

    on(AnswerActions.postAnswerFailure, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            postAnswerFailure:action.error,
            postAnswerSuccess:""
        }
    }),
    
    on(AnswerActions.updateAnswerSuccess, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            updateAnswerFailure:"",
            updateAnswerSuccess:action.message
        }
    }),

    on(AnswerActions.updateAnswerFailure, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            updateAnswerFailure:action.error,
            updateAnswerSuccess:""
        }
    }),

    on(AnswerActions.acceptSuccess, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            acceptFailure:"",
            acceptSuccess:action.message
        }
    }),

    on(AnswerActions.acceptFailure, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            acceptFailure:action.error,
            acceptSuccess:""
        }
    }),
    on(AnswerActions.upvoteSuccess, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            upvoteFailure:"",
            upvoteSuccess:action.message
        }
    }),

    on(AnswerActions.upvoteFailure, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            upvoteFailure:action.error,
            upvoteSuccess:""
        }
    }),
    on(AnswerActions.downvoteSuccess, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            downvoteFailure:"",
            downvoteSuccess:action.message
        }
    }),

    on(AnswerActions.downvoteFailure, (state,action):AnswerRedInterface=>{
        return {
            ...state,
            downvoteFailure:action.error,
            downvoteSuccess:""
        }
    })
)

const getAnswerState=createFeatureSelector<AnswerRedInterface>('answer')
export const getAnswersSuccess=createSelector(getAnswerState, (state)=>state.answers)
export const getAnswerFailure=createSelector(getAnswerState, (state)=>state.error)
export const getQuestId=createSelector(getAnswerState, (state)=>state.question_id)
export const getQuestAnswers=createSelector(getAnswersSuccess,getQuestId, (answers,question_id)=>{
    return answers.filter((answer)=>answer.question_id===question_id) as Answer[]
})
