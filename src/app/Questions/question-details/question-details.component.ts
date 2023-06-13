import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { TagsComponent } from 'src/app/tags/tags.component';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from 'src/app/Services/questions.service';
import { Question } from 'src/app/Interfaces/questionInterfaces';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent,TagsComponent],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute, private QuestionsService:QuestionsService){}
  question!:Question

  ngOnInit(): void {
    this.route.params.subscribe((q:Params)=>{
      this.question=this.QuestionsService.getSingleQuestion(q['question_id'])
    })
  }

}
