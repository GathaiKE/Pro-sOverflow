export interface Question{
    question_id:string
    title:string
    body:string
    upvotes:number
    downvotes:number
    accepted:number
    tags:Tag[]
}

export interface NewQuestion{
    title:string
    body:string
    tags:Tag[]
}

export interface UpdatedQuestion{
    title:string
    body:string
    tags:Tag[]
}

export interface Answer {
    answer_id:string
    answer:string
    question_id:string
    user_id:string
    upvotes:number
    downvotes:string
    accepted:number
}

export interface Comment{
    comment_id:string
    comment:string
    user_id:string
    answer_id:string
}

export interface Tag{
    tag_id:string
    tag:string
}

export interface PostQuestionSuccess{
    message:string
}