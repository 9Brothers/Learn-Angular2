import  { 
  Component, 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lifecycle',
  template: `
    <p #variavelLocalP>{{ valorInicial }}</p>
    <p>{{ variavelLocalP.textContent }}</p>
  `
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input()
  valorInicial = 10;

  @ViewChild('variavelLocalP')
  variavelLocalP:HTMLElement;

  private log:any = console.log;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
    this.log(this.variavelLocalP);
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
    this.log(this.variavelLocalP);
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
    this.log(this.variavelLocalP);
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
}