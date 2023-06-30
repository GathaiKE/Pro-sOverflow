import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/userInterface';
import * as UserActions from '../NgRx/Actions/userActions'
import { AppState } from '../NgRx/AppState';
import { getCurrentUserEmail, getCurrentUserFmame, getCurrentUserPic, getCurrentUsersmame, getRole } from '../NgRx/Reducers/userReducer';
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
isAdmin$!:string
    constructor(private Store:Store<AppState>, private CordinatorService:CoordinatorService){}
    search:string=""
    first_name!:String
    second_name!:String
    email!:String
    profile_pic!:String
    showMenu=false

  ngOnInit(): void {
    this.Store.select(getRole).subscribe(role=> {
      console.log(role)
      this.isAdmin$=role
      return role
    })

    this.Store.select(getCurrentUserFmame).subscribe(res=>{
      this.first_name=res
    })
  
    this.Store.select(getCurrentUsersmame).subscribe(res=>{
      this.second_name=res
    })
    this.Store.select(getCurrentUserEmail).subscribe(res=>{
      this.email=res
    })
  
    this.Store.select(getCurrentUserPic).subscribe(res=>{
      this.profile_pic=res
    })
  }
  openToggle(){
    this.showMenu=!this.showMenu
  }

  logout(){
    localStorage.clear()
  }

  searchMethod() {

  }

}

