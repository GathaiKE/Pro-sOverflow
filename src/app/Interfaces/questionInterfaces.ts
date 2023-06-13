export interface Question{
    question_id:string
    title:string
    body:string
}

export interface Answer{
    question_id:string
    body:string
    answer_id:string
}

export interface Comment{
    answer_id:string
    comment:string
}