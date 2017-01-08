import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css'],
})
export class DataBindingComponent {
  constructor() { }

  url = 'http://www.google.com.br';
  urlImg = 'http://lorempixel.com/400/200/';

  conteudoAtual:string = '';
  conteudoSalvo:string = '';

  isMouseOver:boolean = false;

  nome:string = '';

  pessoa:any = { nome: '', idade: 18 };

  nomeCurso:string = 'Curso Angular 2';

  getValor() {
    return 1
  }

  onClick = function() {
    alert('botão clicado');
  }

  onKeyUp = function($event:any) {
    console.log($event)
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave = function(valor:string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan = function() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou = function ($event:any) {
    console.log($event);
  }
}