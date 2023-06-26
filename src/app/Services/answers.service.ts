import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../Interfaces/questionInterfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http:HttpClient) { }

  getAnswers():Observable<Answer[]>{
    return this.http.get<Answer[]>(`http://localhost:4000/answers/all`)
  }

  postAnswer(question_id:string,answer:Answer):Observable<Answer>{
    return this.http.post<Answer>(`http://localhost:4000/answers/post/${question_id}`,answer)
  }

  updateAnswer(answer_id:string,updatedAnswer:Answer):Observable<Answer>{
    return this.http.put<Answer>(`http://localhost:4000/answers//update/${answer_id}`,updatedAnswer)
  }

  deleteAnswer(answer_id:string):Observable<Answer>{
    return this.http.delete<Answer>(`http://localhost:4000/answers//delete/${answer_id}`)
  }

  acceptAnswer(answer_id:string){
    // return this.http.put(`http://localhost:4000/answers/accept/${answer_id}`)
  }
  upvoteAnswer(answer_id:string){
    // return this.http.put(`http://localhost:4000/answers/upvote/${answer_id}`)
  }
  downvoteAnswer(answer_id:string){
    // return this.http.put(`http://localhost:4000/answers/downvote/${answer_id}`)
  }
}
