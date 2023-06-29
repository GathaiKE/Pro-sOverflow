import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Tag, TagSuccess } from '../Interfaces/questionInterfaces';
import { Store } from '@ngrx/store';
import * as QuestionActions from '../NgRx/Actions/questionActions'
import { getAllTags } from '../NgRx/Reducers/questionReducers';
import { AppState } from '../NgRx/AppState';
import { CoordinatorService } from '../Services/coordinator.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
tags$!:Observable<TagSuccess[]>

constructor(private store:Store<AppState>, private cordinator:CoordinatorService){}

ngOnInit(): void {
  this.store.dispatch(QuestionActions.getTags())
  this.tags$=this.store.select(getAllTags)
}

onSelected(tag_id:string){
  this.cordinator.onSelected(tag_id)
}

}
