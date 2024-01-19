import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import * as CommentActions from '../Actions/commentActions'
import { Comment } from 'src/app/Interfaces/questionInterfaces'


export interface CommentRedInterface{
    comments:Comment[]
    error:string
    postCommentSuccess:string
    postCommentFailure:string
    deleteCommentSuccess:string
    deleteCommentFailure:string
    answer_id:string
    getAllCommentsFailure:string
}

const initialState:CommentRedInterface={
    comments:[],
    error:"",
    postCommentSuccess:"",
    postCommentFailure:"",
    deleteCommentSuccess:"",
    deleteCommentFailure:"",
    answer_id:"",
    getAllCommentsFailure:""
}


export const commentReducer=createReducer(
    initialState,

    on(CommentActions.postCommentSuccess, (state,action):CommentRedInterface=>{
        return {
            ...state,
            postCommentSuccess:action.message,
            postCommentFailure:""
        }
    }),

    on(CommentActions.postCommentFailure, (state,action):CommentRedInterface=>{
        return {
            ...state,
            postCommentSuccess:"",
            postCommentFailure:action.error
        }
    }),

    // on(CommentActions.getAnsCommentsSuccess, (state,action):CommentRedInterface=>{
    //     return {
    //         ...state,
    //         comments:action.Comments,
    //         error:""
    //     }
    // }),
    // on(CommentActions.getAnsCommentsFailure, (state,action):CommentRedInterface=>{
    //     return {
    //         ...state,
    //         comments:[],
    //         error:action.error
    //     }
    // }),
    
    on(CommentActions.getAllCommentsSuccess, (state,action):CommentRedInterface=>{
        return {
            ...state,
            comments:action.comments,
            getAllCommentsFailure:""
        }
    }),

    on(CommentActions.getAllCommentsFailure, (state,action):CommentRedInterface=>{
        return {
            ...state,
            comments:[],
            getAllCommentsFailure:action.error
        }
    }),

    on(CommentActions.getSingleAnswerComments, (state,action):CommentRedInterface=>{
        return {
            ...state,
            answer_id:action.answer_id
        }
    }),

    on(CommentActions.deleteCommentSuccess, (state,action):CommentRedInterface=>{
        return {
            ...state,
            deleteCommentSuccess:action.message,
            deleteCommentFailure:""
        }
    }),

    on(CommentActions.deleteCommentFailure, (state,action):CommentRedInterface=>{
        return {
            ...state,
            deleteCommentSuccess:"",
            deleteCommentFailure:action.error
        }
    })
)

const getCommentState=createFeatureSelector<CommentRedInterface>('comment')
export const getComments = createSelector(getCommentState, (state)=>state.comments)
export const getCommentsError = createSelector(getCommentState, (state)=>state.error)
export const getAnswerId=createSelector(getCommentState, (state)=>state.answer_id)
export const geAnswerComments=createSelector(getComments,getAnswerId, (comments,answer_id)=>{
    return comments.find(comment=>comment.answer_id===answer_id) as Comment
})

