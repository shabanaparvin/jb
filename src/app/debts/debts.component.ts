import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {UserService} from '../services/userservice.service';
import {DebtService} from '../services/debtservice.service';

import {User} from '../services/User';
import {Debt} from '../services/Debt';
import {Credit} from '../services/Credit';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {
  user:User;
  debts:any=[];
  member:string;
  dialogOpened:boolean=false;

  constructor(private _route:ActivatedRoute,private _userService:UserService,private _debtService:DebtService) { 
   
  }

  ngOnInit() {
     //get the logged in user
     this.user = this._userService.getAuthenticatedUser();
     if(!this.user){
       console.log("No authentication found...");
       this._userService.logout();
     }
     if(this.user.role=="admin"){
       this.member = this._route.snapshot.params['member'];
       if(this.member!=null){
        this._debtService.getUserDebts(this.member).subscribe(
          (res)=>{
            if(res.length>0){
              this.debts = res;
            }else{
              console.log(`
              No debts found
              `);
            }
          },
          (err)=>{
            console.log(`
            Error while fetching debts. Error Message %s, URL: %s
            `,err.message,err.url);
          }
        );
       }else{
        this._debtService.getAllDebts().subscribe(
          (res)=>{
            if(res.length>0){
              this.debts = res;
            }else{
              console.log(`
              No debts found
              `);
            }
          },
          (err)=>{
            console.log(`
            Error while fetching debts. Error Message %s, URL: %s
            `,err.message,err.url);
          }
        );
       }
      
     }else{
      this._debtService.getUserDebts(this.user.username).subscribe(
        (res)=>{
          if(res.length>0){
            this.debts = res;
          }else{
            console.log(`
            No debts found
            `);
          }
        },
        (err)=>{
          console.log(`
          Error while fetching debts. Error Message %s, URL: %s
          `,err.message,err.url);
        }
      );
     }
    
  }

  editDebt(){
    console.log("edit debt workss!!!");
  }

}
