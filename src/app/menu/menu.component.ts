import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { getRole } from '../NgRx/Reducers/userReducer';
import {take} from 'rxjs'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLinkActive,RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    constructor(private Store:Store, private Router:Router){}

    isAdmin(): boolean {
      let isAdmin = false;
      this.Store.select(getRole).pipe(take(1)).subscribe(role => {
        isAdmin = role === "admin";
      });
      return isAdmin;
    }
}
