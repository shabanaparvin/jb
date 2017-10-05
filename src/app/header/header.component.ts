import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/userservice.service';

import {User} from '../services/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User;
  isExpanded = false;

  constructor(private _router: Router, private _userservice:UserService) { }

  ngOnInit() {
    this.user = this._userservice.getAuthenticatedUser();
    this._userservice.userLoggedIn.subscribe(
      (_user)=>{
        this.user = _user;
        this.isExpanded=false;
      }
    );
  }

}
