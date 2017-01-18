import { Injectable } from '@angular/core';
import {SidebarEntry, SidebarComplete} from '../datatypes/sidebar.type'
import { SidebarData } from './mock-sidebar';
import  {SidebarEditorData} from './mock-sidebar-editor'
@Injectable()
export class SidebarService {
  getData(): Promise<SidebarComplete> {
    return Promise.resolve(SidebarData)
  }
  getControlDataEditor(): Promise<any> {
    return Promise.resolve(SidebarEditorData)
  }
}
