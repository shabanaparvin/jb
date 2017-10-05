import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {EventEmitter} from '@angular/core';

import {User} from './User';
import {Debt} from './Debt';
import {Credit} from './Credit';

import {RestURL} from './environment';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
 private _authenticateUser:User=undefined;
 public userLoggedIn:EventEmitter<User> = new EventEmitter();

 constructor(private _router: Router,private _http:Http) { 

  }

  login(username:string,password:string):Observable<User>{
    return this._http.post(RestURL+'/users',{"username":username,"password":password})
    .map((data:any)=>{
      console.log(data.json());
      return data.json();
    });
  }

  logout(){
    this.setAuthenticatedUser(undefined);
    this._router.navigate(['/login']);
};

  getAuthenticatedUser():User{
    return this._authenticateUser;
  }
  setAuthenticatedUser(user:User):void{
    this._authenticateUser = user;
    this.userLoggedIn.emit(user);
  }

  getAllUsers():Observable<Array<User>>{
    return this._http.get(RestURL+'/users')
    .map((data:any)=>{
      console.log(data.json());
      return data.json();
    });
  }
}
