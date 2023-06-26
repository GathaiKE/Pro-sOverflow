import { Injectable } from '@angular/core';
import { LogInSuccess, LogRequest, RegisterSuccess, User } from '../Interfaces/userInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) { }
  
  //Register
  register(user:User):Observable<RegisterSuccess>{
    return this.http.post<RegisterSuccess>('http://localhost:4000/users/register',user)
  }

  //logIn
  logIn(logRequest:LogRequest):Observable<LogInSuccess>{
    console.log(logRequest);
    
    return this.http.post<LogInSuccess>('http://localhost:4000/users/logIn',logRequest)
  }

  //Get single user details
  getUser():Observable<User>{
    return this.http.get<User>(`http://localhost:4000/users/getById`)
  }

  //Get All Users
  getUsers(page:number):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:4000/users/getUsers/${page}`)
  }

  //Update user Details
  updateUser(updatedUser:User):Observable<User>{
    return this.http.put<User>('http://localhost:4000/users/update',updatedUser)
  }
}
