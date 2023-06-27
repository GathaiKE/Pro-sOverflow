import { createAction, props } from "@ngrx/store";
import { LogRequest, User } from "src/app/Interfaces/userInterface";


//Register User
export const register=createAction('[Users]-Register',props<{profile_pic:string,first_name:string,last_name:string,email:string,password:string}>())
export const registerSuccess=createAction('[Users]-RegisterSuccess',props<{message:string}>())
export const registerFailure=createAction('[Users]-RegisterFailure',props<{error:string}>())

//Log In
export const logIn=createAction('[Users]-LogIn',props<{email:string, password:string}>())
export const logInSuccess=createAction('[Users]-LogInSuccess',props<{message:string,token:string,role:string}>())
export const logInFailure=createAction('[Users]-LogInFailure',props<{error:string}>())

//Geu User By Id
export const getUser=createAction('[Users]-GetUser',props<{user_id:string}>())
export const getUserSuccess=createAction('[Users]-GetUserSuccess',props<{user:User}>())
export const getUserFailure=createAction('[Users]-GetUserFailure',props<{error:string}>())

//update user Details
export const updateUser=createAction('[Users]-UpdateQuestion',props<{user:User}>())
export const updateUserSuccess=createAction('[Users]-UpdateQuestionSuccess',props<{message:string}>())
export const updateUserFailure=createAction('[Users]-UpdateQuestionFailure',props<{error:string}>())

//Get All Users
export const getUsers=createAction('[Users]-GetUsers')
export const getUsersSuccess=createAction('[Users]-GetUsersSuccess',props<{user:User[]}>())
export const getUsersFailure=createAction('[Users]-GetUsersFailure',props<{error:string}>())

//Dectivate
export const deactivate=createAction('[Users]-Deactivate',props<{user_id:string}>())
export const deactivateSuccess=createAction('[Users]-DeactivateSuccess',props<{message:string}>())
export const deactivateFailure=createAction('[Users]-DeactivateFailure',props<{error:string}>())

//Get all Deactivaed Users
export const getInactiveUsers=createAction('[Users]-GetInactiveUsers')
export const getInactiveUsersSuccess=createAction('[Users]-GetInactiveUsersSuccess',props<{users:User[]}>())
export const getInactiveUsersFailure=createAction('[Users]-GetInactiveUsersFailure',props<{error:string}>())