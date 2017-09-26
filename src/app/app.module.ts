import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitComponentComponent } from './init-component/init-component.component';
import { InitGuardGuard } from './guard/init-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
   
    InitComponentComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
