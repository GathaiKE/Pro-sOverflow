import { User } from 'src/app/Interfaces/userInterface'
import * as UserActions from '../Actions/userActions'
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { state } from '@angular/animations'

export interface UserRedInterface{
    users:User[]
    error:string
    logInSuccess:string
    logInFailure:string
    updateUserSuccess:string
    updateUserFailure:string
    deactivateSuccess:string
    deactivateFailure:string
    getInactiveUsersSuccess:User[]
    getInactiveUsersFailure:string
    user_id:string
    registerSuccess:string
    registerFailure:string
    authenticated:boolean,
    token:string
    role:string
    profile_pic:string
    first_name:string
    email:string
    second_name:string
}

const initialState:UserRedInterface={
    users:[],
    error:"",
    logInSuccess:"",
    logInFailure:"",
    updateUserSuccess:"",
    updateUserFailure:"",
    deactivateSuccess:"",
    deactivateFailure:"",
    getInactiveUsersSuccess:[],
    getInactiveUsersFailure:"",
    user_id:"",
    registerSuccess:"",
    registerFailure:"",
    authenticated:false,
    token:"",
    role:"",
    profile_pic:'',
    first_name:'',
    email:'',
    second_name:'',
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
        logInSuccess:action.message,
        authenticated:true,
        token:action.token,
        role:action.role,
        email:action.email,
        first_name:action.first_name,
        second_name:action.second_name,
        profile_pic:action.profile_pic,
        user_id:action.user_id
    }
}),
on(UserActions.logInFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        logInFailure:action.error,
        logInSuccess:"",
        token:"",
        role:"",
        email:"",
        first_name:"",
        second_name:"",
        profile_pic:"",
        user_id:""
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
}),

on(UserActions.registerSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        registerFailure:"",
        registerSuccess:action.message
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
export const getAuthStatus=createSelector(getUsersState, state=>state.authenticated)
export const getRole=createSelector(getUsersState, state=>{
    // console.log(state);
    return state.role
    
})
export const getLogError=createSelector(getUsersState, state=> state.logInFailure)
export const getCurrentUserFmame=createSelector(getUsersState, (state)=>state.first_name)
export const getCurrentUsersmame=createSelector(getUsersState, (state)=>state.second_name)
export const getCurrentUserEmail=createSelector(getUsersState, (state)=>state.email)
export const getCurrentUserPic=createSelector(getUsersState, (state)=>state.profile_pic)
export const getCurrentUserId=createSelector(getUsersState, (state)=>state.user_id)