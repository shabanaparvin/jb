import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

import { CreditsComponent } from './credits.component';
import { AddCreditComponent } from './addcredit/add.credit.component';

@NgModule({
  imports: [
    CommonModule,BsDatepickerModule,RouterModule,FormsModule
  ],
  declarations: [CreditsComponent, AddCreditComponent],
  exports:[CreditsComponent]
})
export class CreditsModule { }
