import { Routes } from "@angular/router";


import { DialogComponent } from './dialog/dialog.component';

export const MaterialRoutes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'dialog',
      component: DialogComponent
    }
    ]
  }
];
