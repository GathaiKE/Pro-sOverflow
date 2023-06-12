import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { TagsComponent } from 'src/app/tags/tags.component';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent,TagsComponent],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent {

}
