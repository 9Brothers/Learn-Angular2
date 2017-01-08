import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MeuPrimeiroComponent, CursosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
