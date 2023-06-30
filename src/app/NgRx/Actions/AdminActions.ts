import { createAction, props } from "@ngrx/store"
import { Question } from "src/app/Interfaces/questionInterfaces"
import { DeleteUserFailure, DeleteUserSuccess, GetQuestionsError, GetUserError, User, UserUpdateSuccess } from "src/app/Interfaces/userInterface"




//Get All Users
export const getAllUsers=createAction('[Admin]-GetUsers')
export const getAllUsersSuccess=createAction('[Admin]-GetAllUsersSuccess',props<{users:User[]}>())
export const getAllUsersFailure=createAction('[Admin]-GetAllUsersFailure',props<{error:GetUserError}>())

//Get all Deactivaed Users
export const getInactiveUsers=createAction('[Admin]-GetInactiveUsers')
export const getInactiveUsersSuccess=createAction('[Admin]-GetInactiveUsersSuccess',props<{users:User[]}>())
export const getInactiveUsersFailure=createAction('[Admin]-GetInactiveUsersFailure',props<{error:string}>())

//Delete User
export const revoke=createAction('[Admin]-Revokee',props<{user_id:string | undefined}>())
export const revokeSuccess=createAction('[Admin]-RevokeeSuccess',props<{message:DeleteUserSuccess}>())
export const revokeFailure=createAction('[Admin]-RevokeFailure',props<{error:DeleteUserFailure}>())

//Get User Questions
export const SelectedUserQuestions=createAction('[Admin]-SelectedUserQuestions',props<{user_id:string}>())
export const SelectedUserQuestionsSuccess=createAction('[Admin]-SelectedUserQuestionsSuccess',props<{questions:Question[]}>())
export const SelectedUserQuestionsFailure=createAction('[Admin]-SelectedUserQuestionsFailure',props<{error:GetQuestionsError}>())
