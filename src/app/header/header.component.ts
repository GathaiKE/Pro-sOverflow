import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/userInterface';
import * as UserActions from '../NgRx/Actions/userActions'
import { AppState } from '../NgRx/AppState';
import { getRole } from '../NgRx/Reducers/userReducer';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../Pipes/filter.pipe';
import { CoordinatorService } from '../Services/coordinator.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule,FilterPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
isAdmin$!:Observable<string>
    constructor(private Store:Store<AppState>, private CordinatorService:CoordinatorService){}
    search:string=""
  user!:Observable<User>

  showMenu=false

  ngOnInit(): void {
    this.isAdmin$ = this.Store.select(getRole)
  }
  openToggle(){
    this.showMenu=!this.showMenu
  }

  logout(){
    localStorage.clear()
  }

  searchMethod() {
    this.CordinatorService.emitSearchQuery(this.search);
  }

}

