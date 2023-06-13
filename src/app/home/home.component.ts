import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';
import { QuestionsService } from '../Services/questions.service';
import { Question } from '../Interfaces/questionInterfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RouterModule,
    TagsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  questions:Question[]=[]

  constructor(private QuestionsService:QuestionsService){}

  ngOnInit(): void {
    this.questions=this.QuestionsService.getQuestions()
  }

}
