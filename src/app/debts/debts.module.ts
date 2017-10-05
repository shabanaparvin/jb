import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

import { DebtsComponent } from './debts.component';
import { AddDebtComponent } from './adddebt/add.debt.component';
import {EditDebtComponent} from './editdebt/editdebt.component';

import { CapitalizePipe} from '../pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule,BsDatepickerModule,RouterModule,FormsModule
  ],
  declarations: [DebtsComponent, AddDebtComponent,EditDebtComponent],
  exports:[DebtsComponent,AddDebtComponent,EditDebtComponent]
})
export class DebtsModule { }
