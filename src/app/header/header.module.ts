import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { HeaderComponent } from './header.component';

import { CapitalizePipe } from '../pipes/capitalize.pipe';
@NgModule({
  imports: [
    CommonModule,RouterModule,NgbModule
  ],
  declarations: [
    HeaderComponent,CapitalizePipe
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
