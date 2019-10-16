import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu : any =[
    {
      titulo:'Principal',
      icon : 'mdi mdi-gauge'
    }
  ];

  constructor() { }
}
