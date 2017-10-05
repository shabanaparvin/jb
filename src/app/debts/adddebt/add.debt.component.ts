import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';



import {UserService} from '../../services/userservice.service';
import {DebtService} from '../../services/debtservice.service';

import {User} from '../../services/User';
import {Debt} from '../../services/Debt';
import {Credit} from '../../services/Credit';

@Component({
  selector: 'app-add-debt',
  templateUrl: './add.debt.component.html',
  styleUrls: ['./add.debt.component.css']
})
export class AddDebtComponent implements OnInit {
  member:string;
  users:Array<User>=[];
  debt:Debt={
    username:"",
    amount:0,
    desc:"",
    date:new Date()
  };

  model;

  constructor(private _router: Router,private _route:ActivatedRoute,private _userService:UserService,private _debtService:DebtService) { }

  ngOnInit() {
    this.member = this._route.snapshot.params['member'];
    this.debt.username = this.member;
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

  addDebt():any{
    this._debtService.addDebt(this.debt).subscribe(
      (res)=>{
        if(res!=null){
          console.log("New Deby added successfully");
          this._router.navigate(['/debts'+(this.member!=null?'/'+this.member:'')]);
        }
      }
    );
  }

}
