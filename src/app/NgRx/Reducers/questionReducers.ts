import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { PostQuestionSuccess, Question, Tag, TagSuccess } from "src/app/Interfaces/questionInterfaces";
import * as QuestionActions from '../Actions/questionActions'
import { combineLatest } from "rxjs";

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
    userQuestions:Question[]
    userQuestionsError:string,
    Tags:TagSuccess[]
    tagErr:string
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
    deleteQuestionFailure:"",
    userQuestions:[],
    userQuestionsError:"",
    Tags:[],
    tagErr:""
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
    on(QuestionActions.getQuestionFailure,(state,{error}):questionReducerInterface=>{
        return {
            ...state,
            questions:[],
            error
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
    }),

    on(QuestionActions.getUserQuestionsSuccess, (state,action):questionReducerInterface=>{
        return {
            ...state,
            userQuestions:action.questions,
            userQuestionsError:""
        }
    }),

    on(QuestionActions.getUserQuestionsFailure, (state,action):questionReducerInterface=>{
        return {
            ...state,
            userQuestions:[],
            userQuestionsError:action.error
        }
    }),

    on(QuestionActions.getTagsSuccess, (state,action):questionReducerInterface=>{
        return {
            ...state,
            Tags:action.Tags,
            tagErr:""
        }
    }),

    on(QuestionActions.getTagsFailure, (state,action):questionReducerInterface=>{
        return {
            ...state,
            Tags:[],
            tagErr:action.error
        }
    })
)

const getQuestionState=createFeatureSelector<questionReducerInterface>('question')
export const getQuestions=createSelector(getQuestionState,(state)=>state.questions)
export const getQuestErr=createSelector(getQuestionState,(state)=>state.error)
export const getQuestById=createSelector(getQuestionState,(state)=>state.question_id)
export const getUserQuests=createSelector(getQuestionState, state=> state.userQuestions)
export const getUserQuesrErr=createSelector(getQuestionState, state=>state.userQuestionsError)
export const getSingleQuestion=createSelector(getQuestions,getQuestById,(questions,question_id)=>{
    return questions.find(question=>question.question_id===question_id) as Question
})
export const getAllTags =createSelector(getQuestionState, (state)=>state.Tags)
