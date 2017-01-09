import { Component, OnInit,trigger,  state,  style,  transition,  animate,Input,Output,EventEmitter } from '@angular/core';
import {SidebarService} from '../services/sidebar.service'
import {SidebarComplete,SidebarEntry} from '../datatypes/sidebar.type'


@Component({
  selector: 'editor',
  moduleId: module.id,
  templateUrl: 'editor.template.html',
  //styleUrls:['sidebar.stylesheet.css'],

})

export class Editor implements OnInit{
  constructor() { }
  @Input('data') data:any;

  private doStuff(){
    this.data.metadata.defaultElement.textstyle.fontSize = '30px'
  }
  ngOnInit(){
    console.log('Hallo', this.data);

  }
}

