import { AnswerRedInterface } from './Reducers/answerReducers'
import {questionReducerInterface} from './Reducers/questionReducers'

export interface AppState{
    questions:questionReducerInterface
    answers:AnswerRedInterface
}