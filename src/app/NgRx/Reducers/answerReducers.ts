import { State, createFeatureSelector, createReducer,createSelector,on } from "@ngrx/store";
import { Answer } from "src/app/Interfaces/questionInterfaces";
import * as AnswerActions from '../Actions/answerActions'
import { state } from "@angular/animations";


export interface AnswerRedInterface{
    answers:Answer[]
    error:string
    question_id:string
}

const initialState:AnswerRedInterface={
    answers:[],
    error:"",
    question_id:""
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
    })
)

const getAnswerState=createFeatureSelector<AnswerRedInterface>('answer')
export const getAnswersSuccess=createSelector(getAnswerState, (state)=>state.answers)
export const getAnswerFailure=createSelector(getAnswerState, (state)=>state.error)
export const getQuestId=createSelector(getAnswerState, (state)=>state.question_id)
export const getQuestAnswers=createSelector(getAnswersSuccess,getQuestId, (answers,question_id)=>{
    return answers.find(answer=>answer.question_id===question_id) as Answer
})
