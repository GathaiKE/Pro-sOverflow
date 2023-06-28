import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { Question } from '../Interfaces/questionInterfaces';
import { Observable, take } from 'rxjs';
import { BriefPipe } from '../Pipes/brief.pipe';
import { AppState } from '../NgRx/AppState';
import { Store } from '@ngrx/store';
import * as QuestionActions from '../NgRx/Actions/questionActions'
import { getUserQuests } from '../NgRx/Reducers/questionReducers';
import { CurrentUser} from '../Interfaces/userInterface';
import * as UserActions from '../NgRx/Actions/userActions'
import { getCurrentUserFmame } from '../NgRx/Reducers/userReducer';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent,MenuComponent,RouterModule,BriefPipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
Questions!:Observable<Question[]>
first_name!:Observable<String>
second_name!:Observable<String>
email!:Observable<String>
profile_pic!:Observable<String>

constructor(private Store:Store<AppState>){}
ngOnInit(): void {
  this.Store.dispatch(QuestionActions.getUserQuestions())
  this.Questions=this.Store.select(getUserQuests)

  this.first_name=this.Store.select(getCurrentUserFmame)
  console.log(this.first_name);
  // this.liveUser.push(this.user)
}

deleteQuestion(question_id:string){
  this.Store.dispatch(QuestionActions.deleteQuestion({question_id}))
  this.Store.dispatch(QuestionActions.getUserQuestions())
  this.Store.select(getUserQuests)
}

updateQuestion(question_id:string){

}

updateUser(user_id:string | undefined){

}
}
