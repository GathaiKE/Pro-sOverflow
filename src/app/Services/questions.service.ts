import { Injectable } from '@angular/core';
import { PostQuestionSuccess, Question } from '../Interfaces/questionInterfaces';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  

  constructor(private http:HttpClient) { }

  token = localStorage.getItem('token') as string;
  headers = new HttpHeaders().set('token', this.token);

  getQuestions():Observable<Question[]>{
    return this.http.get<Question[]>('http://localhost:4000/questions/all/1')
  }
  
  getSingleQuestion(question_id:string):Observable<Question>{
    return this.http.get<Question>(`http://localhost:4000/questions/single/${question_id}`)
  }

  addQueston(newQuestion:Question){
    return this.http.post<PostQuestionSuccess>(`http://localhost:4000/questions/post`,newQuestion)
  }
  
  updateQuestion(question_id:string,updatedQuestion:Question){
    return this.http.put<Question>(`http://localhost:4000/questions/update/${question_id}`,updatedQuestion)
  }

    deleteQuestion(question_id:string){
      return this.http.delete<Question>(`http://localhost:4000/questions/delete/${question_id}`)
    }
}
