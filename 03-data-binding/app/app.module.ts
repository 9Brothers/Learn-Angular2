import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './data-binding/input-property.component';
import { OutputPropertyComponent } from './data-binding/output-property.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DataBindingComponent, InputPropertyComponent, OutputPropertyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
