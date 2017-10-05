import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  invalidCredentials = false;

  constructor(private _router: Router, private _userservice:UserService) { }

  ngOnInit() {
      this._userservice.logout();
  }

  login() {
      this.loading = true;

      this._userservice.login(this.model.username,this.model.password)
      .subscribe(
        (res:any)=>{
            let user = res
            if(res.length>0){
              let user = res[0];
              this._userservice.setAuthenticatedUser(user);
              this._router.navigate(['/dashboard']);
             /* if(user.role=="admin"){
                //this._router.navigate(['/users']);
              }else{
                this._router.navigate(['/dashboard']);
              }*/
            }else{
              this.invalidCredentials = true;
              this.loading=false;
            }
        },
        (err:any)=>{
            console.log(`
            Can't login. Error Message %s, URL: %s
            `,err.message,err.url);
        }
    );
  }

}
