import { Component, OnInit } from '@angular/core';
declare function Init_pugins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Init_pugins();
  }

}
