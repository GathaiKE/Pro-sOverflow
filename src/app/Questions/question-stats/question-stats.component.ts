import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { FooterComponent } from 'src/app/footer/footer.component';

@Component({
  selector: 'app-question-stats',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MenuComponent,FooterComponent],
  templateUrl: './question-stats.component.html',
  styleUrls: ['./question-stats.component.css']
})
export class QuestionStatsComponent {

}
