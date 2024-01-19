import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { TagsComponent } from 'src/app/tags/tags.component';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {
  Answer,
  AnswerForm,
  AnswerRequest,
  Question,
} from 'src/app/Interfaces/questionInterfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as QuestionActions from '../../NgRx/Actions/questionActions';
import { getSingleQuestion } from 'src/app/NgRx/Reducers/questionReducers';
import { AppState } from 'src/app/NgRx/AppState';
import * as AnswerActions from '../../NgRx/Actions/answerActions';
import {
  getQuestAnswers,
  postAnswerFailure,
  postAnswerSuccess,
} from 'src/app/NgRx/Reducers/answerReducers';
import { FormsModule, NgForm } from '@angular/forms';
import { getCurrentUserId } from 'src/app/NgRx/Reducers/userReducer';
import { FeedbackComponent } from 'src/app/feedback/feedback.component';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    TagsComponent,
    FormsModule,
    RouterModule,
    FeedbackComponent,
  ],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css'],
})
export class QuestionDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private Store: Store<AppState>) {}
  question!: Observable<Question>;
  answers!: Observable<Answer[]>;
  activeUserId!: string;
  AnswerUserId!: string;
  seccessmessage!: string;
  form: AnswerForm = {
    ans: '',
  }
  message!:null | string
  action: 'Add' | 'Update'='Add'

  ngOnInit(): void {
    this.Store.select(getQuestAnswers);
    this.route.params.subscribe((q: Params) => {
      //Get Question By Id
      this.Store.dispatch(QuestionActions.getQuestions());
      this.Store.dispatch(
        QuestionActions.getSingleQuestion({ question_id: q['question_id'] })
      );
      this.question = this.Store.select(getSingleQuestion);

      //Get Answers by Question_id
      this.Store.dispatch(AnswerActions.getAnswers());
      this.Store.dispatch(
        AnswerActions.GetSingleQuestionAnswers({
          question_id: q['question_id'],
        })
      );
      this.answers = this.Store.select(getQuestAnswers);

      //Get Logged user Id
      this.Store.select(getCurrentUserId).subscribe((user) => {
        this.activeUserId = user;
      });
      // console.log(this.message);
    });
  }

  submit(form: NgForm) {
    this.route.params.subscribe((q: Params) => {
      const answer: AnswerRequest = form.value;
      this.Store.dispatch(
        AnswerActions.postAnswer({ answer, question_id: q['question_id'] })
      );
    });
    // success message
    this.Store.select(postAnswerSuccess).subscribe((message) => {
      console.log(message.message);
      this.message = message.message;
      return message;
    });

    // fail message
    this.Store.select(postAnswerFailure).subscribe(
      (err) => (this.message = err)
    );

    form.reset();
  }

  user() {
    this.AnswerUserId == this.activeUserId ? true : false;
  }
  close() {
    // this.message = null;
  }

  upvote(answer_id: string) {
    this.Store.dispatch(AnswerActions.upvoteAnswer({ answer_id }));
  }
  downvote(answer_id: string) {
    this.Store.dispatch(AnswerActions.downvoteAnswer({ answer_id }));
  }

  update(answer_id:string){
    this.action='Update'
    // this.form.setValue({

    // })
    
  }
}
