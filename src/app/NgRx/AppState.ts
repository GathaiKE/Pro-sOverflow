import { AnswerRedInterface } from './Reducers/answerReducers'
import {questionReducerInterface} from './Reducers/questionReducers'
import { UserRedInterface } from './Reducers/userReducer'

export interface AppState{
    question:questionReducerInterface
    answers:AnswerRedInterface
    users:UserRedInterface
}