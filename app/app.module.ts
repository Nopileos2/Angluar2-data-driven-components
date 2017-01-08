import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {Sidebar} from './sidebar/sidebar.component'
import {SidebarElement} from './sidebar/sidebar-element/sidebar-element.component'
import { AppComponent }  from './app.component';
import {SidebarColor} from './sidebar/Style-Directives/sidebar-color.directive'
import {SidebarBorder} from './sidebar/Style-Directives/sidebar-border.directive'

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule
                ],
  declarations: [ AppComponent,Sidebar,SidebarElement,SidebarColor,SidebarBorder ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
