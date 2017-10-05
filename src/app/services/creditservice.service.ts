import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {User} from './User';
import {Debt} from './Debt';
import {Credit} from './Credit';
import {RestURL} from './environment';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CreditService {
 private credits:Array<Credit>;

 constructor(private _http:Http) { 
}

getAllCredits():Observable<Array<Debt>>{
  return this._http.get(RestURL+'/credits')
  .map((data:any)=>{
    console.log(data.json());
    return data.json();
  });
}

getUserCredits(username):Observable<Array<Debt>>{
  return this._http.get(RestURL+'/credits/'+username)
  .map((data:any)=>{
    console.log(data.json());
    return data.json();
  });
}

getTotalCredit(_credits:Array<Credit>):number{
  let _total:number=0;
  _credits.forEach((_credit)=>{
    _total += _credit.amount;
  });
  return _total;
}

addCredit(credit:Credit):Observable<User>{
  return this._http.post(RestURL+'/addcredit',credit)
  .map((data:any)=>{
    console.log(data.json());
    return data.json();
  });
}

}
