import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <meu-primeiro-componente></meu-primeiro-componente>
    <cursos-lista></cursos-lista>
  `
})
export class AppComponent  { name = 'Angular'; }
