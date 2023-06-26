import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Question } from "src/app/Interfaces/questionInterfaces";
import * as QuestionActions from '../Actions/questionActions'

export interface questionReducerInterface{
    questions:Question[]
    error:string
    question_id:string
}

const initialState:questionReducerInterface={
    questions:[],
    error:"",
    question_id:""
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
    })
)

const getQuestionState=createFeatureSelector<questionReducerInterface>('question')
export const getQuestions=createSelector(getQuestionState,(state)=>state.questions)
export const getQuestErr=createSelector(getQuestionState,(state)=>state.error)
export const getQuestById=createSelector(getQuestionState,(state)=>state.question_id)
export const getSingleQuestion=createSelector(getQuestions,getQuestById,(questions,question_id)=>{
    return questions.find(question=>question.question_id===question_id) as Question
})