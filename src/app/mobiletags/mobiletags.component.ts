import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-mobiletags',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent,MenuComponent],
  templateUrl: './mobiletags.component.html',
  styleUrls: ['./mobiletags.component.css']
})
export class MobiletagsComponent {

}
