import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuthStatus } from '../NgRx/Reducers/userReducer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessService implements OnInit{
status!:Boolean
  constructor(private Store:Store, private route:Router) { }

    ngOnInit(): void {
      this.Store.select(getAuthStatus).subscribe(res=>{
        console.log(res)
        this.status=res
        return res
      })
    }

    authenticated(){
      this.status?console.log("You are authenticated"):this.route.navigate(['/logIn'])
    }
}
