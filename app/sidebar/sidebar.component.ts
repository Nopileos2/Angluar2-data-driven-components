import { Component, OnInit,trigger,  state,  style,  transition,  animate } from '@angular/core';
import {SidebarService} from '../services/sidebar.service'
import {SidebarComplete,SidebarEntry} from '../datatypes/sidebar.type'
@Component({
  selector: 'sidebar',
  moduleId: module.id,
  templateUrl: 'sidebar.template.html',
  styleUrls:['sidebar.stylesheet.css'],
  providers:[SidebarService],
})

export class Sidebar implements OnInit{
  constructor(private sidebarService: SidebarService) { }
  name = 'Sidebar2';
  data:SidebarComplete;
  done:boolean = false;
  ngOnInit(){
    this.sidebarService.getData().then(data => {
      this.data = data;
      console.log(this.data);
      this.done = true;
    })

  }
}
