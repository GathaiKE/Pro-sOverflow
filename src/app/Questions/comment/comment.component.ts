import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CommentForm } from 'src/app/Interfaces/questionInterfaces';
import { ActivatedRoute, Params } from '@angular/router';
import * as AnswerActions from '../../NgRx/Actions/answerActions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() message!:string
  @Output() close= new EventEmitter<void>()
  form:CommentForm={
    comment:""
  }

    constructor(private route:ActivatedRoute, private Store:Store){}

  onClose(){
    this.close.emit
  }

  submit(form:NgForm){
    this.route.params.subscribe((a:Params)=>{
      const comment:string = form.value
      this.Store.dispatch(AnswerActions.postComment({comment,answer_id:a['answer_id']}))
    })
  }
  
}
