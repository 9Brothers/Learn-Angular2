import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <lifecycle [valorInicial]="valorInicial" *ngIf="!deletarConteudo"></lifecycle>
    <button (click)="valorInicial = 20">Mudar o valor</button>
    <button (click)="deletarConteudo = true">Deletar tag life cycle</button>
  `,  
})
export class AppComponent  { 
  name = 'Angular';

  deletarConteudo:boolean = false;
  valorInicial = 15;
}
