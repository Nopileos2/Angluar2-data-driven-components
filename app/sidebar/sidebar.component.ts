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
  controlData:any;
  done:boolean = false;
  doneCount:number = 0;
  ngOnInit(){
    this.sidebarService.getData().then(data => {
      this.data = data;
      this.doneCount++;
      if(this.doneCount == 2) this.done = true;
    });
    this.sidebarService.getControlDataEditor().then(data => {
      this.controlData = data;
      this.doneCount++;
      if(this.doneCount == 2) this.done = true;
    })

  }
}
