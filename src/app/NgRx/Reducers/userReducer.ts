import { User } from 'src/app/Interfaces/userInterface'
import * as UserActions from '../Actions/userActions'
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'

export interface UserRedInterface{
    users:User[]
    error:string
    token:string
    username:string
    role_id:number
    logInFailure:string
    updateUserSuccess:string
    updateUserFailure:string
    deactivateSuccess:string
    deactivateFailure:string
    getInactiveUsersSuccess:User[]
    getInactiveUsersFailure:string
    user_id:string
}

const initialState:UserRedInterface={
    users:[],
    error:"",
    token:"",
    username:"",
    role_id: 0,
    logInFailure:"",
    updateUserSuccess:"",
    updateUserFailure:"",
    deactivateSuccess:"",
    deactivateFailure:"",
    getInactiveUsersSuccess:[],
    getInactiveUsersFailure:"",
    user_id:""
}

export const UserReducer=createReducer(
initialState,


on(UserActions.getUsersSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        users:action.user,
        error:""
    }
}),

on(UserActions.getUsersFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        users:[],
        error:action.error
    }
}),

on(UserActions.logInSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        logInFailure:"",
        token:action.token,
        role_id:action.role,
        username:action.username
    }
}),
on(UserActions.logInFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        logInFailure:action.error,
        token:"",
        role_id:0,
        username:""
    }
}),

on(UserActions.updateUserSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        updateUserFailure:"",
        updateUserSuccess:action.message
    }
}),

on(UserActions.updateUserFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        updateUserFailure:action.error,
        updateUserSuccess:""
    }
}),

on(UserActions.deactivateSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        updateUserSuccess:action.message,
        updateUserFailure:""
    }
}),

on(UserActions.deactivateFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        updateUserSuccess:"",
        updateUserFailure:action.error
    }
}),

on(UserActions.getInactiveUsersSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        getInactiveUsersSuccess:action.users,
        getInactiveUsersFailure:""
    }
}),

on(UserActions.getInactiveUsersFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        getInactiveUsersSuccess:[],
        getInactiveUsersFailure:action.error
    }
})
)

const getUsersState=createFeatureSelector<UserRedInterface>('users')
export const getUsers=createSelector(getUsersState, (state)=>state.users)
export const getUsersError=createSelector(getUsersState, (state)=>state.error)
export const getUserId=createSelector(getUsersState, (state)=> state.user_id)
export const getSingleUser=createSelector(getUsers,getUserId, (users,user_id)=>{
    return users.find(user=>user.user_id===user_id) as User
})