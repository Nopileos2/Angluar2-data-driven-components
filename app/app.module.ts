import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {Sidebar} from './sidebar/sidebar.component'
import {SidebarElement} from './sidebar/sidebar-element/sidebar-element.component'
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import {SidebarStyle} from './sidebar/Style-Directives/sidebar-style.directive'
import {Editor} from './editor/editor.component'
@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule
                ],
  declarations: [ AppComponent,Sidebar,SidebarElement,SidebarStyle,Editor ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
