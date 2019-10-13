import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styles: []
})
export class AccoutSettingComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }


  cambiarColor(tema:string){
    console.log(tema);
    let  url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href',url);
  }
}
