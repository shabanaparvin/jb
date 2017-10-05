import { RouterModule,Routes }   from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebtsComponent } from './debts/debts.component';
import { CreditsComponent } from './credits/credits.component';
import { AddDebtComponent } from './debts/adddebt/add.debt.component';
import { AddCreditComponent } from './credits/addcredit/add.credit.component';
import {EditDebtComponent} from './debts/editdebt/editdebt.component';

import {AuthGuardService} from './services/authgaurdservice.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate:[AuthGuardService]  },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]  },
    { path: 'debts', component: DebtsComponent, canActivate:[AuthGuardService]  },
    { path: 'credits', component: CreditsComponent, canActivate:[AuthGuardService]  },
    { path: 'dashboard/:member', component: DashboardComponent, canActivate:[AuthGuardService]  },
    { path: 'debts/:member', component: DebtsComponent, canActivate:[AuthGuardService]  },
    { path: 'credits/:member', component: CreditsComponent, canActivate:[AuthGuardService]  },
    { path: 'adddebt', component: AddDebtComponent, canActivate:[AuthGuardService] },
    { path: 'addcredit', component: AddCreditComponent, canActivate:[AuthGuardService]  },
    { path: 'adddebt/:member', component: AddDebtComponent, canActivate:[AuthGuardService] },
    { path: 'addcredit/:member', component: AddCreditComponent, canActivate:[AuthGuardService]  },
    { path: 'editdebt', component: EditDebtComponent, canActivate:[AuthGuardService] },
    { path: '**', redirectTo:'login'}, //always last

  ];
  
  export const AppRouting = RouterModule.forRoot(appRoutes);