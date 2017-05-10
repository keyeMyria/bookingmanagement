import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  styles: [':host /deep/ .md-sidenav-content {padding: 0;} mat-sidenav-container {z-index: 4000}'],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {}
