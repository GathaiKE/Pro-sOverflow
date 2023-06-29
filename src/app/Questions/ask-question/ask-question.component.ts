import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as QuestionActions from '../../NgRx/Actions/questionActions'

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent,RouterModule,MenuComponent,ReactiveFormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit{
  form!:FormGroup

  constructor(private fb:FormBuilder, private Store:Store){}

    ngOnInit():void {
      this.form = this.fb.group({
        title: ['', Validators.required],
        body: ['', Validators.required],
        newTag: ['', Validators.required],
        tags: this.fb.array([])
      });
    }
  
    get tagControls() {
      return this.form.get('tags') as FormArray;
    }
  
    createTagControl(): FormControl {
      return this.fb.control('');
    }

    get newTag() {
      return this.form.get('newTag')
    }
  
    addTag() {
      this.tagControls.push(new FormControl(this.newTag?.value));
      // console.log(this.form);
      
    }
  
    onSubmit() {
      if (this.form.valid) {
        // console.log(this.form.value);
        let question={
          title:this.form.value.title,
          body:this.form.value.body,
          tags:this.form.value.tags.map((tag:string)=>({tag}))
        }
        this.Store.dispatch(QuestionActions.postQuestion({question}))
      }
    }
}