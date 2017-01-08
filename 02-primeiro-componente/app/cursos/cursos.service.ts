import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private _curso: String[] = null;

  get Cursos() : any[] {
    return ['angular2', 'javascript', 'html', 'Eita']
  }

  set Cursos(cursos: any[]) {
    this._curso = cursos;
  }
}