import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer, AnswerRequest, PostAnswerSuccess } from '../Interfaces/questionInterfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  token = localStorage.getItem('token') as string;
  headers= {headers: new HttpHeaders().set('token',this.token)}

  constructor(private http:HttpClient) { }

  getAnswers():Observable<Answer[]>{
    return this.http.get<Answer[]>(`http://localhost:4000/answers/all`,this.headers)
  }

  postAnswer(answer:string,question_id:string):Observable<string>{
    console.log(answer)
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.post<string>(`http://localhost:4000/answers/post/${question_id}`,answer,headers)
  }

  updateAnswer(answer_id:string,updatedAnswer:Answer):Observable<Answer>{
    return this.http.put<Answer>(`http://localhost:4000/answers//update/${answer_id}`,updatedAnswer,this.headers)
  }

  deleteAnswer(answer_id:string):Observable<Answer>{
    return this.http.delete<Answer>(`http://localhost:4000/answers//delete/${answer_id}`,this.headers)
  }

  acceptAnswer(answer_id:string){
    return this.http.put(`http://localhost:4000/answers/accept/${answer_id}`,this.headers)
  }
  upvoteAnswer(answer_id:string){
    return this.http.put(`http://localhost:4000/answers/upvote/${answer_id}`,this.headers)
  }
  downvoteAnswer(answer_id:string){
    return this.http.put(`http://localhost:4000/answers/downvote/${answer_id}`,this.headers)
  }
}
