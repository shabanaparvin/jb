import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

//custom components
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {UsersModule} from './users/users.module';
import {DebtsModule} from './debts/debts.module';
import {CreditsModule} from './credits/credits.module';

import {UserService} from './services/userservice.service';
import {DebtService} from './services/debtservice.service';
import {CreditService} from './services/creditservice.service';
import {AuthGuardService} from './services/authgaurdservice.service';



//routing
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BsDatepickerModule.forRoot(),FormsModule,HttpModule,HeaderModule,FooterModule,LoginModule,DashboardModule,UsersModule,DebtsModule,CreditsModule,AppRouting
  ],
  providers: [UserService,DebtService,CreditService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
