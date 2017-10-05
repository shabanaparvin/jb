import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {UserService} from '../services/userservice.service';
import {CreditService} from '../services/creditservice.service';

import {User} from '../services/User';
import {Debt} from '../services/Debt';
import {Credit} from '../services/Credit';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  user:User;
  credits:any;
  member:string;

  constructor(private _route:ActivatedRoute,private _userService:UserService,private _creditService:CreditService) { 
    
  }

  ngOnInit() {
    this.user = this._userService.getAuthenticatedUser();
    if(!this.user){
      console.log("No authentication found...");
      this._userService.logout();
    }
    if(this.user.role=="admin"){
      this.member = this._route.snapshot.params['member'];
      if(this.member!=null){
        this._creditService.getUserCredits(this.member)
        .subscribe(
          (res)=>{
            if(res.length>0){
              this.credits = res;
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
        this._creditService.getAllCredits()
        .subscribe(
          (res)=>{
            if(res.length>0){
              this.credits = res;
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
      this._creditService.getUserCredits(this.user.username)
      .subscribe(
        (res)=>{
          if(res.length>0){
            this.credits = res;
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
