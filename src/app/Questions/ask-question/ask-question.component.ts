import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent,RouterModule,MenuComponent],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent {

}
