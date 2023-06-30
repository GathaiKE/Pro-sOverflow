import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../NgRx/AppState';
import { ActivatedRoute, Params } from '@angular/router';
import * as QuestonActions from '../NgRx/Actions/questionActions'
import { Observable } from 'rxjs';
import { Question } from '../Interfaces/questionInterfaces';
import { getSingleQuestion } from '../NgRx/Reducers/questionReducers';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent,ReactiveFormsModule],
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {
form!:FormGroup
question!:Observable<Question>
constructor(private fb:FormBuilder,private Store:Store<AppState>, private Route:ActivatedRoute){

}
  ngOnInit():void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })

    this.Route.params.subscribe((q:Params)=>{
      this.Store.dispatch(QuestonActions.getQuestions())
      this.Store.dispatch(QuestonActions.getSingleQuestion({question_id:q['question_id']}))
      this.question = this.Store.select(getSingleQuestion)
      this.question.subscribe(
        data=>{
          this.form.setValue({
            title:data.title,
            body:data.body
          })
        }
      )
      })
  }

  onSubmit(){
    this.Route.params.subscribe((q:Params)=>{
      this.Store.dispatch(QuestonActions.updateQuestion({question_id:q['question_id'],updatedQuestion:this.form.value}))
    })
  }
}
