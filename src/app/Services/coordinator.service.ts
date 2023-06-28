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

  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentSearchQuery: Observable<string> = this.searchQuerySubject.asObservable();

  private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
  public questions$: Observable<Question[]> = this.questionsSubject.asObservable();
  constructor(private Store:Store<AppState>) { }

  emitSearchQuery(searchQuery: string) {
    this.searchQuerySubject.next(searchQuery);
  }

  getQuestions(): Observable<Question[]> {
    this.Store.dispatch(QuestionActions.getQuestions())
    this.Store.select(getQuestions)
    return this.questions$;
  }
}
