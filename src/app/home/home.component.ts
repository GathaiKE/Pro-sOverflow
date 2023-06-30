import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';
import { Question } from '../Interfaces/questionInterfaces';
import {EMPTY, Observable, catchError, map} from 'rxjs'
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

  constructor(private Store:Store<AppState>){}

  ngOnInit(): void {
    this.Store.dispatch(QuestionActions.getQuestions())
    this.questions$=this.Store.select(getQuestions)
    // console.log(this.questions$);
  }
  
}
