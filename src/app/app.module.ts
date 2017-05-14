import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { MaterialModule, NoConflictStyleCompatibilityMode } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,

    AdminLayoutComponent,
    AuthLayoutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    NoopAnimationsModule,

    RouterModule.forRoot(AppRoutes),

    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),

    MaterialModule,
    NoConflictStyleCompatibilityMode,
    FlexLayoutModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
