import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostCommentSuccess } from '../Interfaces/questionInterfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  constructor(private http:HttpClient) { }

  postComment(answer_id:string,comment:string):Observable<string>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.post<string>(`http://localhost:4000/comments/add/${answer_id}`,comment,headers)
  }

  getAnswerComments(answer_id:string):Observable<Comment>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.get<Comment>(`http://localhost:4000/comments/get/${answer_id}`,headers)
  }

  deleteComment(Comment_id:string):Observable<Comment>{
    const token = localStorage.getItem('token') as string;
    const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.delete<Comment>(`http://localhost:4000/comments/delete/${Comment_id}`,headers)
  }

  updateComment(comment_id:string,comment:Comment):Observable<Comment>{
      const token = localStorage.getItem('token') as string;
      const headers= {headers: new HttpHeaders().set('token',token)}
    return this.http.put<Comment>(`http://localhost:4000/comments/update/${comment_id}`,comment,headers)
  }
}
