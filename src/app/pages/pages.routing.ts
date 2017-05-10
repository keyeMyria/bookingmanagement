import { Routes } from "@angular/router";

import { BlankComponent } from './blank/blank.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'blank',
      component: BlankComponent
    }
    ]
  }
];
