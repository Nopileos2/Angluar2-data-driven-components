import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {Sidebar} from './sidebar/sidebar.component'
import {SidebarElement} from './sidebar/sidebar-element/sidebar-element.component'
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import {SidebarStyle} from './sidebar/Style-Directives/sidebar-style.directive'
import {Editor} from './editor/editor.component'
import {EditorElement} from './editor/editor-element/editor-element.component'
import {EditorSidebarMode} from './editor/editor-sidebar-mode/editor-sidebar-mode.component'
import {EditorPrimitiveInput} from './editor/editor-element/editor-primitive-input/editor-primitive-input.component';
import {SizeInput} from './editor/editor-element/editor-primitive-input/input-elements/size-input.component'
import {SelectInput} from './editor/editor-element/editor-primitive-input/input-elements/select-input.component'
import {ColorInput} from './editor/editor-element/editor-primitive-input/input-elements/color-input.component'
@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule
                ],
  declarations: [ AppComponent,Sidebar,SidebarElement,SidebarStyle,Editor,EditorElement,EditorSidebarMode,EditorPrimitiveInput,SizeInput,SelectInput,ColorInput ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
