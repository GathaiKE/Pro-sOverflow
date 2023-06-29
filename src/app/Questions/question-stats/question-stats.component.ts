import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/NgRx/AppState';
import * as QuestionActions from '../../NgRx/Actions/questionActions'
import { getSingleQuestion } from 'src/app/NgRx/Reducers/questionReducers';
import { Answer, Question } from 'src/app/Interfaces/questionInterfaces';
import { Observable } from 'rxjs';
import * as AnswerActions from '../../NgRx/Actions/answerActions'
import { getQuestAnswers } from 'src/app/NgRx/Reducers/answerReducers';

@Component({
  selector: 'app-question-stats',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent,RouterModule],
  templateUrl: './question-stats.component.html',
  styleUrls: ['./question-stats.component.css']
})
export class QuestionStatsComponent implements OnInit{
  answers$!:Observable<Answer[]>
  question$!:Observable<Question>
  constructor(private route:ActivatedRoute, private Store:Store<AppState>){}

  ngOnInit(): void {
    this.route.params.subscribe((q:Params)=>{
      this.Store.dispatch(QuestionActions.getQuestions())
      this.Store.dispatch(QuestionActions.getSingleQuestion({question_id:q['question_id']}))
      this.question$=this.Store.select(getSingleQuestion)

      this.Store.dispatch(AnswerActions.getAnswers())
      this.Store.dispatch(AnswerActions.GetSingleQuestionAnswers({question_id:q['question_id']}))
      this.answers$=this.Store.select(getQuestAnswers)
    })
  }

  accept(answer_id:string){
    this.Store.dispatch(AnswerActions.acceptAnswer({answer_id}))
  }
  upvote(answer_id:string){
    this.Store.dispatch(AnswerActions.upvoteAnswer({answer_id}))
  }
  downvote(answer_id:string){
    this.Store.dispatch(AnswerActions.downvoteAnswer({answer_id}))
  }
}
