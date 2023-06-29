import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { Router, RouterModule } from '@angular/router';
import { Question } from '../Interfaces/questionInterfaces';
import { Observable, take } from 'rxjs';
import { BriefPipe } from '../Pipes/brief.pipe';
import { AppState } from '../NgRx/AppState';
import { Store } from '@ngrx/store';
import * as QuestionActions from '../NgRx/Actions/questionActions'
import { getUserQuests } from '../NgRx/Reducers/questionReducers';
import { CurrentUser} from '../Interfaces/userInterface';
import * as UserActions from '../NgRx/Actions/userActions'
import { getCurrentUserEmail, getCurrentUserFmame, getCurrentUserId, getCurrentUserPic, getCurrentUsersmame } from '../NgRx/Reducers/userReducer';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent,MenuComponent,RouterModule,BriefPipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
Questions!:Observable<Question[]>
first_name!:String
second_name!:String
email!:String
profile_pic!:String
user_id!:string

constructor(private Store:Store<AppState>,private route:Router){}
ngOnInit(): void {
  this.Store.dispatch(QuestionActions.getUserQuestions())
  this.Questions=this.Store.select(getUserQuests)

  this.Store.select(getCurrentUserFmame).subscribe(res=>{
    this.first_name=res
  })

  this.Store.select(getCurrentUsersmame).subscribe(res=>{
    this.second_name=res
  })
  this.Store.select(getCurrentUserEmail).subscribe(res=>{
    this.email=res
  })

  this.Store.select(getCurrentUserPic).subscribe(res=>{
    this.profile_pic=res
  })
  this.Store.select(getCurrentUserId).subscribe(res=>{
    this.user_id=res
  })

}

deleteQuestion(question_id:string){
  this.Store.dispatch(QuestionActions.deleteQuestion({question_id}))
  this.Store.dispatch(QuestionActions.getUserQuestions())
  this.Store.select(getUserQuests)
}

updateQuestion(question_id:string){
  this.route.navigate(['/update',question_id])
}

updateUser(user_id:string | undefined){
  
}
}
