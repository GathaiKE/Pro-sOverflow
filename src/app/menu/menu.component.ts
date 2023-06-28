import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getRole } from '../NgRx/Reducers/userReducer';
import {Observable, take} from 'rxjs'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLinkActive,RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
    isAdmin$!: Observable<string>

    constructor(private Store:Store, private Router:Router){}

    ngOnInit(): void {
      this.isAdmin$ = this.Store.pipe(select(getRole));
      console.log(this.isAdmin$);
      
    }

}
