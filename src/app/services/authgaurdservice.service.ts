import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './userservice.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    
    constructor(private router: Router,private _userService:UserService) { }
    
    canActivate(): boolean{
        let user:any = this._userService.getAuthenticatedUser();
        if(user!=null){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
      }

}