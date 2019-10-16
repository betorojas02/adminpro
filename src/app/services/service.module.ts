import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  SettingsService,
  SidebarService,

} from './service.index';
import { ShredService } from './shared/shared.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
  SettingsService,
  ShredService,
  SidebarService
  ]
})
export class ServiceModule { }
