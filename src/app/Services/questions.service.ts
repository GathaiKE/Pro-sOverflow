import { Injectable } from '@angular/core';
import { NewQuestion, TagSuccess, Question, UpdateQuestionSuccess } from '../Interfaces/questionInterfaces';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  token:string
  headers

  tokenn = localStorage.getItem('token') as string;
  headersn= {headers: new HttpHeaders().set('token',this.tokenn)}

  constructor(private http:HttpClient) { 
    this.token = localStorage.getItem('token') as string;
    this.headers= {headers: new HttpHeaders().set('token',this.token)}
  }

  

  getQuestions():Observable<Question[]>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.get<Question[]>('http://localhost:4000/questions/all/1',headers)
  }
  
  getUserQuestions():Observable<Question[]>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.get<Question[]>('http://localhost:4000/questions/user/1',headers)
  }

  getTags():Observable<TagSuccess[]>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.get<TagSuccess[]>('http://localhost:4000/questions/tags',headers)
  }
  
  getSingleQuestion(question_id:string):Observable<Question>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.get<Question>(`http://localhost:4000/questions/single/${question_id}`,headers)
  }

  postQueston(newQuestion:NewQuestion):Observable<string>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.post<string>(`http://localhost:4000/questions/post`,newQuestion,headers)
  }
  
  updateQuestion(question_id:string,updatedQuestion:Question):Observable<UpdateQuestionSuccess>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.put<UpdateQuestionSuccess>(`http://localhost:4000/questions/update/${question_id}`,updatedQuestion,headers)
  }

    deleteQuestion(question_id:string):Observable<string>{
      const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
      return this.http.delete<string>(`http://localhost:4000/questions/delete/${question_id}`,headers)
    }
}
