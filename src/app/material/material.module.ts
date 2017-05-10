import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';

import { MaterialRoutes } from './material.routing';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MaterialRoutes), MaterialModule, HttpModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
  declarations: [ DialogComponent],
})

export class MaterialComponentsModule {}
