import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styles: []
})
export class AccoutSettingComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(public _ajustes: SettingsService) {}

  ngOnInit() {
    this.colocarChek();
  }

  cambiarColor(tema: string, link: any) {
    console.log(tema);

    this.aplicarCheck(link);

    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores = document.getElementsByClassName('selector');

    // @ts-ignore
    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }


  colocarChek() {
    const selectores = document.getElementsByClassName('selector');

    const tema = this._ajustes.ajustes.tema;
    // @ts-ignore
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
          ref.classList.add('working');
          break;
      }

    }
  }
}
