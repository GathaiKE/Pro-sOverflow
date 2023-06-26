export interface User{
    user_id:string
    profile_pic?:string
    first_name:string
    second_name:string
    email:string
    email_sent:number
    deactivated:number
    role_id:string
    password:string
}

export interface LogRequest{
    email:string
    password:string
}