import { Injectable } from '@angular/core';
import {SidebarEntry, SidebarComplete} from '../datatypes/sidebar.type'
import { SidebarData } from './mock-sidebar';
@Injectable()
export class SidebarService {
  getData(): Promise<SidebarComplete> {
    return Promise.resolve(SidebarData)
  }
}
