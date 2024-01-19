import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { Question } from '../Interfaces/questionInterfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../NgRx/AppState';
import * as QuestionActions from '../NgRx/Actions/questionActions'
import { getQuestions } from '../NgRx/Reducers/questionReducers';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
  public questions$: Observable<Question[]> = this.questionsSubject.asObservable();

  private selectedTagSubject:BehaviorSubject<string>=new BehaviorSubject<string>('')
  public selectedTagAction$=this.selectedTagSubject.asObservable()

  constructor(private Store:Store<AppState>) { }


  


  onSelected(tag_id:string){
    console.log(tag_id);
    
    this.selectedTagSubject.next(tag_id)
  }
}
