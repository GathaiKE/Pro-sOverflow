export interface User{
    user_id?:string
    profile_pic:string
    first_name:string
    second_name:string
    email:string
    email_sent?:number
    deactivated?:number
    role?:string
    password:string
}

export interface LogRequest{
    email:string
    password:string
}

export interface RegisterSuccess{
    message:string
}


export interface NewUser{
    profile_pic:string
    first_name:string
    second_name:string
    email:string
    password:string
}

export interface LogInSuccess{
    message:string
    token:string
    role:string
    username:string
    email:string
    first_name:string
    second_name:string
    profile_pic:string
    user_id:string
}

export interface CurrentUser{
    message:string
    token:string
    role:string
    username:string
    email:string
    first_name:string
    second_name:string
    profile_pic:string
}

export interface LogInError{
    error:string
}
export interface UserUpdateSuccess{
    message:string
}
export interface DeleteUserSuccess{
    message:string
}
export interface DeleteUserFailure{
    error:string
}
export interface GetQuestionsError{
    error:string
}
export interface GetUserError{
    error:string
}