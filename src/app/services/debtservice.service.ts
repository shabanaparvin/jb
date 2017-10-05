import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {User} from './User';
import {Debt} from './Debt';
import {Credit} from './Credit';
import {RestURL} from './environment';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DebtService {
 private debts:Array<Debt>;

 constructor(private _http:Http) { 
  }

  getAllDebts():Observable<Array<Debt>>{
    return this._http.get(RestURL+'/debts')
    .map((data:any)=>{
      console.log(data.json());
      return data.json();
    });
  }

  getUserDebts(username):Observable<Array<Debt>>{
    return this._http.get(RestURL+'/debts/'+username)
    .map((data:any)=>{
      console.log(data.json());
      return data.json();
    });
  }

  getTotalDebt(_debts:Array<Debt>):number{
    let _total:number=0;
    _debts.forEach((_debt)=>{
      _total += _debt.amount;
    });
    return _total;
  }


  addDebt(debt:Debt):Observable<User>{
    return this._http.post(RestURL+'/adddebt',debt)
    .map((data:any)=>{
      console.log(data.json());
      return data.json();
    });
  }

}
