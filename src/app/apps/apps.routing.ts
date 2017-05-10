import { Routes } from "@angular/router";


import { MailComponent } from './mail/mail.component';

export const AppsRoutes: Routes = [{
  path: '',
  children: [
   {
    path: 'messages',
    component: MailComponent
  }

  ]
}];
