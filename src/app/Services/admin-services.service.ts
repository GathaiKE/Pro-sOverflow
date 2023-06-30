import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../Interfaces/questionInterfaces';
import { DeleteUserSuccess, User } from '../Interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  token = localStorage.getItem('token') as string;
  headers= {headers: new HttpHeaders().set('token',this.token)}
  constructor(private http:HttpClient) { }
  
  //Register
  selectedUserQuestions(user_id:string):Observable<Question[]>{
    return this.http.post<Question[]>('http://localhost:4000/users/register',user_id,this.headers)
  }
  //Revoke
  removeUser(user_id:string | undefined):Observable<DeleteUserSuccess>{
    return this.http.post<DeleteUserSuccess>('http://localhost:4000/users/register',user_id,this.headers)
  }
  //Get All Users
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:4000/users/getUsers/1`,this.headers)
  }
}
