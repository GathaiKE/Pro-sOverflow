import { DeleteUserFailure, DeleteUserSuccess, GetQuestionsError, GetUserError, User, UserUpdateSuccess } from 'src/app/Interfaces/userInterface'
import * as UserActions from '../Actions/userActions'
import * as AdminActions from '../Actions/AdminActions'
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { state } from '@angular/animations'
import { Question } from 'src/app/Interfaces/questionInterfaces'

export interface UserRedInterface{
    users:User[]
    error:string
    logInSuccess:string
    logInFailure:string
    updateUserSuccess:UserUpdateSuccess
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
    second_name:string,
    loggedUser:User[]
    loggedUserError:string
    revokeSuccess:DeleteUserSuccess
    RevokeFailure:DeleteUserFailure
    selectedUserQuestions:Question[]
    selectedUserError:GetQuestionsError
    getUsersSuccess:User[]
    getUsersFailure:GetUserError
}

const initialState:UserRedInterface={
    users:[],
    error:"",
    logInSuccess:"",
    logInFailure:"",
    updateUserSuccess:{message:""},
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
    loggedUser:[],
    loggedUserError:"",
    revokeSuccess:{message:""},
    RevokeFailure:{error:""},
    selectedUserQuestions:[],
    selectedUserError:{error:""},
    getUsersSuccess:[],
    getUsersFailure:{error:""}
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
on(UserActions.getLoggedUserSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        loggedUser:action.user,
        loggedUserError:'a'
    }
}),

on(UserActions.getLoggedUserFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        loggedUser:[],
        loggedUserError:action.error
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
        updateUserSuccess:{message:""}
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
        updateUserSuccess:{message:""},
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
}),

on(AdminActions.revokeSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        revokeSuccess:action.message,
        RevokeFailure:{error:""}
    }
}),

on(AdminActions.revokeFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        revokeSuccess:{message:""},
        RevokeFailure:action.error
    }
}),
on(AdminActions.SelectedUserQuestionsFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        selectedUserError:action.error,
        selectedUserQuestions:[]
    }
}),

on(AdminActions.SelectedUserQuestionsSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        selectedUserError:{error:""},
        selectedUserQuestions:action.questions
    }
}),

on(AdminActions.getAllUsersSuccess, (state,action):UserRedInterface=>{
    return {
        ...state,
        getUsersSuccess:action.users,
        getUsersFailure:{error:""}
    }
}),
on(AdminActions.getAllUsersFailure, (state,action):UserRedInterface=>{
    return {
        ...state,
        getUsersSuccess:[],
        getUsersFailure:action.error
    }
}),
)

const getUsersState=createFeatureSelector<UserRedInterface>('users')
export const getUsers=createSelector(getUsersState, (state)=>state.getUsersSuccess)
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