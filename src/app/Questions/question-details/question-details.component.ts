import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { TagsComponent } from 'src/app/tags/tags.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Answer, Question } from 'src/app/Interfaces/questionInterfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as QuestionActions from '../../NgRx/Actions/questionActions'
import { getSingleQuestion } from 'src/app/NgRx/Reducers/questionReducers';
import { AppState } from 'src/app/NgRx/AppState';
import * as AnswerActions from '../../NgRx/Actions/answerActions'
import { getQuestAnswers } from 'src/app/NgRx/Reducers/answerReducers';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent,TagsComponent,  FormsModule],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute, private Store:Store<AppState>){}
  question!:Observable<Question>
  answers!:Observable<Answer[]>
  form:any={
    ans:""
  }

  ngOnInit(): void {
    this.route.params.subscribe((q:Params)=>{
      //Get Question By Id
      this.Store.dispatch(QuestionActions.getQuestions())
      this.Store.dispatch(QuestionActions.getSingleQuestion({question_id:q['question_id']}))
      this.question=this.Store.select(getSingleQuestion)

      //Get Answers by Question_id
      this.Store.dispatch(AnswerActions.getAnswers())
      this.Store.dispatch(AnswerActions.GetSingleQuestionAnswers({question_id:q['question_id']}))
      this.answers=this.Store.select(getQuestAnswers)
    })
  }

  submit(form:NgForm){

    this.route.params.subscribe((q:Params)=>{
      const answer:string = form.value
      this.Store.dispatch(AnswerActions.postAnswer({answer,question_id:q['question_id']}))
    })
    
  }

}
