import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SpaComponent } from './spa.component';

@NgModule({
  declarations: [
    SpaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [SpaComponent]
})
export class SpaModule { }
