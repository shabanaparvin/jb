import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserService} from '../services/userservice.service';
import {DebtService} from '../services/debtservice.service';
import {CreditService} from '../services/creditservice.service';

import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

import {User} from '../services/User';
import {Debt} from '../services/Debt';
import {Credit} from '../services/Credit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User;
  totalDebts:number=0;
  totalCredits:number=0;

  member:string;

  constructor(private _route:ActivatedRoute,private _userService:UserService,private _debtService:DebtService,private _creditService:CreditService) { 
    
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
        this._debtService.getUserDebts(this.member)
        .subscribe(
          (res)=>{
            let _debts = res;
            if(_debts.length>0){
              this.totalDebts = this._debtService.getTotalDebt(_debts);
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
        this._creditService.getUserCredits(this.member)
        .subscribe(
          (res)=>{
            let _credits = res;
            if(_credits.length>0){
              this.totalCredits = this._creditService.getTotalCredit(_credits);
            }else{
              console.log(`
              No credits found
              `);
            }
          },
          (err)=>{
            console.log(`
            Error while fetching credits. Error Message %s, URL: %s
            `,err.message,err.url);
          }
        );
      }else{
        this._debtService.getAllDebts()
        .subscribe(
          (res)=>{
            let _debts = res;
            if(_debts.length>0){
              this.totalDebts = this._debtService.getTotalDebt(_debts);
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
        this._creditService.getAllCredits()
        .subscribe(
          (res)=>{
            let _credits = res;
            if(_credits.length>0){
              this.totalCredits = this._creditService.getTotalCredit(_credits);
            }else{
              console.log(`
              No credits found
              `);
            }
          },
          (err)=>{
            console.log(`
            Error while fetching credits. Error Message %s, URL: %s
            `,err.message,err.url);
          }
        );
      }
      
    }else{
      this._debtService.getUserDebts(this.user.username)
      .subscribe(
        (res)=>{
          let _debts = res;
          if(_debts.length>0){
            this.totalDebts = this._debtService.getTotalDebt(_debts);
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
      this._creditService.getUserCredits(this.user.username)
      .subscribe(
        (res)=>{
          let _credits = res;
          if(_credits.length>0){
            this.totalCredits = this._creditService.getTotalCredit(_credits);
          }else{
            console.log(`
            No credits found
            `);
          }
        },
        (err)=>{
          console.log(`
          Error while fetching credits. Error Message %s, URL: %s
          `,err.message,err.url);
        }
      );
    }
    

  }

}
