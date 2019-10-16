import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { SettingsService } from "../../services/service.index";

@Component({
  selector: "app-accout-setting",
  templateUrl: "./accout-setting.component.html",
  styles: []
})
export class AccoutSettingComponent implements OnInit {
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
    let selectores = document.getElementsByClassName("selector");

    for (let ref of selectores) {
      ref.classList.remove("working");
    }

    link.classList.add("working");
  }


  colocarChek(){
    let selectores = document.getElementsByClassName("selector");

    let tema = this._ajustes.ajustes.tema;
    for (let ref of selectores) {
      if(ref.getAttribute('data-theme') === tema){
          ref.classList.add("working");
          break;
      }
     
    }
  }
}
