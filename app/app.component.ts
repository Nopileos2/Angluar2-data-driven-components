import { Component } from '@angular/core';
import {Sidebar} from './sidebar/sidebar.component'

@Component({
  selector: 'my-app',
  template: `<sidebar></sidebar>`
})
export class AppComponent  { name = 'Angular'; }
