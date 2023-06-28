import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { Store } from '@ngrx/store';
import * as QuestionActions from '../NgRx/Actions/questionActions'
import { getQuestions, getUserQuests } from '../NgRx/Reducers/questionReducers';
import { Observable } from 'rxjs';
import { Question } from '../Interfaces/questionInterfaces';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
questions$!:Observable<Question[]>
  constructor(private Store:Store){}

  ngOnInit(): void {
    this.Store.dispatch(QuestionActions.getQuestions())
    this.questions$=this.Store.select(getQuestions)
  }
  deleteQuestion(question_id:string){
    this.Store.dispatch(QuestionActions.deleteQuestion({question_id}))
    this.Store.dispatch(QuestionActions.getUserQuestions())
    this.Store.select(getUserQuests)
  }

}
