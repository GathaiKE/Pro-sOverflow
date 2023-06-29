import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer, AnswerRequest, PostAnswerSuccess } from '../Interfaces/questionInterfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http:HttpClient) { }

  getAnswers():Observable<Answer[]>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.get<Answer[]>(`http://localhost:4000/answers/all`,headers)
  }

  postAnswer(answer:string,question_id:string):Observable<any>{
    // console.log(answer)
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.post<any>(`http://localhost:4000/answers/post/${question_id}`,answer,headers)
  }

  updateAnswer(answer_id:string,updatedAnswer:Answer):Observable<Answer>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.put<Answer>(`http://localhost:4000/answers//update/${answer_id}`,updatedAnswer,headers)
  }

  deleteAnswer(answer_id:string):Observable<Answer>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.delete<Answer>(`http://localhost:4000/answers//delete/${answer_id}`,headers)
  }

  acceptAnswer(answer_id:string):Observable<string>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.put<string>(`http://localhost:4000/answers/accept/${answer_id}`,headers)
  }
  upvoteAnswer(answer_id:string):Observable<string>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.put<string>(`http://localhost:4000/answers/upvote/${answer_id}`,headers)
  }
  downvoteAnswer(answer_id:string):Observable<string>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.put<string>(`http://localhost:4000/answers/downvote/${answer_id}`,headers)
  }
}
