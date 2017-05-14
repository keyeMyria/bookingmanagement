import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpagesLayout } from './mpages.component';

import { routing } from './mpages.routing';


@NgModule({
  imports: [
    CommonModule,


    routing,

  ],
  declarations: [
    MpagesLayout
  ]
})
export class MpagesModule { }
