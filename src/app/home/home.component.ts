import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';

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
export class HomeComponent {

}
