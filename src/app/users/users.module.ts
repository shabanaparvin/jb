import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { UsersComponent } from './users.component';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [UsersComponent],
  exports:[UsersComponent]
})
export class UsersModule { }
