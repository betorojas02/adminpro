import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda : string ='Leyenda';
  @Input() progreso : number = 50;

  // @ViewChild('txtProgress') txtProgress : ElementRef;


  @Output() cambioValor:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  onChanges(newValue:number){


    // let elemHTML : any = document.getElementsByName('progreso')[0];

    if(newValue >= 100){
      this.progreso = 100;

    }else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }
   
    // elemHTML.value = this.progreso;
    // esto hace referenia la input 
    // this.txtProgress.nativeElement.value= this.progreso;

    // esto hace referencia al barra progreso
     this.cambioValor.emit(this.progreso);

  }

  cambiarValor(valor : number){

    if( this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if(  this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return ;
    }
    this.progreso += valor;

    this.cambioValor.emit(this.progreso);
  }
}
