import { Injectable } from '@angular/core';
import { LogInSuccess, LogRequest, NewUser, RegisterSuccess, User, UserUpdateSuccess } from '../Interfaces/userInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token = localStorage.getItem('token') as string;
  headers= {headers: new HttpHeaders().set('token',this.token)}
  constructor(private http:HttpClient) { }
  
  //Register
  register(newuser:NewUser):Observable<RegisterSuccess>{
    return this.http.post<RegisterSuccess>('http://localhost:4000/users/register',newuser)
  }

  //logIn
  logIn(logRequest:LogRequest):Observable<LogInSuccess>{
    // console.log(logRequest);
    
    return this.http.post<LogInSuccess>('http://localhost:4000/users/logIn',logRequest)
  }

  //Get single user details
  getUser():Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:4000/users/getById`,this.headers)
  }

  //Get All Users
  getUsers(page:number):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:4000/users/getUsers/${page}`,this.headers)
  }

  //Update user Details
  updateUser(updatedUser:User):Observable<UserUpdateSuccess>{
    return this.http.put<UserUpdateSuccess>('http://localhost:4000/users/update',updatedUser,this.headers)
  }
}
