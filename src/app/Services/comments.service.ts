import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  token = localStorage.getItem('token') as string;
  headers= {headers: new HttpHeaders().set('token',this.token)}
  
  constructor(private http:HttpClient) { }

  postComment(answer_id:string,comment:Comment):Observable<Comment>{
    return this.http.post<Comment>(`http://localhost:4000/comments/add/${answer_id}`,comment,this.headers)
  }

  getAnswerComments(answer_id:string):Observable<Comment>{
    return this.http.get<Comment>(`http://localhost:4000/comments/get/${answer_id}`,this.headers)
  }

  deleteComment(Comment_id:string):Observable<Comment>{
    return this.http.delete<Comment>(`http://localhost:4000/comments/delete/${Comment_id}`,this.headers)
  }

  updateComment(comment_id:string,comment:Comment):Observable<Comment>{
    return this.http.put<Comment>(`http://localhost:4000/comments/update/${comment_id}`,comment,this.headers)
  }
}
