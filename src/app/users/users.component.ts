import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/userservice.service';
import {User} from '../services/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Array<User>=[];
  constructor(private _userService:UserService) { }

  ngOnInit() {
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

}
