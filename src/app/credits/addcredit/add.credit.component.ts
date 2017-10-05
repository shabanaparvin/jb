import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


import {UserService} from '../../services/userservice.service';
import {CreditService} from '../../services/creditservice.service';

import {User} from '../../services/User';
import {Debt} from '../../services/Debt';
import {Credit} from '../../services/Credit';


@Component({
  selector: 'app-add-credit',
  templateUrl: './add.credit.component.html',
  styleUrls: ['./add.credit.component.css']
})
export class AddCreditComponent implements OnInit {
  member:string;
  users:Array<User>=[];
  credit:Credit={
    username:"",
    amount:0,
    desc:"",
    date:new Date()
  };

  constructor(private _router: Router,private _route:ActivatedRoute,private _userService:UserService,private _creditService:CreditService) { }

  ngOnInit() {
    this.member = this._route.snapshot.params['member'];
    this.credit.username = this.member;
    this._userService.getAllUsers()
    .subscribe(
      (res:any)=>{
        let _users = res;
        if(_users.length>0){
          _users.forEach((_user)=>{
            _user.role==="member" && this.users.push(_user);
          });
        }else{
          console.log(`
          No Users found
          `);
        }
      },(err:any)=>{
        console.log(`
        Error while fetching users. Error Message %s, URL: %s
        `,err.message,err.url);
      }
    );
  }

  addCredit():any{
    this._creditService.addCredit(this.credit).subscribe(
      (res)=>{
        if(res!=null){
          console.log("New Credit added successfully");
          this._router.navigate(['/credits'+(this.member!=null?'/'+this.member:'')]);
        }
      }
    );
  }

}
