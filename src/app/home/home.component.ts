import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';
import { Question } from '../Interfaces/questionInterfaces';
import {Observable, map} from 'rxjs'
import { Store } from '@ngrx/store';
import { AppState } from '../NgRx/AppState';
import {getQuestions} from '../NgRx/Reducers/questionReducers'
import * as QuestionActions from '../NgRx/Actions/questionActions'
import { BriefPipe } from '../Pipes/brief.pipe';
import { FilterPipe } from '../Pipes/filter.pipe';
import { CoordinatorService } from '../Services/coordinator.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RouterModule,
    TagsComponent,
    BriefPipe,
    FilterPipe
  ],
  providers:[FilterPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  questions$!:Observable<Question[]>
  search: string = ''
  filteredQuestions!:Question[]

  constructor(private Store:Store<AppState>, private Cordinator:CoordinatorService, private filterPipe: FilterPipe){}

  ngOnInit(): void {
    this.questions$=this.Store.select(getQuestions)
    this.Store.dispatch(QuestionActions.getQuestions())

    this.questions$ = this.Cordinator.getQuestions()
    this.Cordinator.currentSearchQuery.subscribe((searchQuery: string) => {
      this.applyFilter(searchQuery)
    });

  }

  applyFilter(searchQuery: string) {
    this.questions$.subscribe((questions: Question[]) => {
      this.filteredQuestions = questions.filter((question: Question) => {
        return question.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    });
  }

}
