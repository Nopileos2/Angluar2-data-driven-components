import { Component, OnInit,trigger,HostListener,  state,  style,  transition,  animate,Input,Output,EventEmitter } from '@angular/core';
import {SidebarService} from '../services/sidebar.service'
import {SidebarComplete,SidebarEntry} from '../datatypes/sidebar.type'


@Component({
  selector: 'editor',
  moduleId: module.id,
  templateUrl: 'editor.template.html',
  styleUrls:['editor.stylesheet.css'],

})

export class Editor implements OnInit {
  constructor() {
  }

  @Input('data') data: any;
  @Input('controlData') controlData:any;
  @Input('mode') mode:any;
  left: string = "100px";
  top: string = "100px";
  offsetX: number = 0;
  offsetY: number = 0;
  object: any[];
  iterArray: Object[] = [];
  done: boolean = false;
  dragable:boolean = true;

  @HostListener('document:dragover', ['$event'])
  handleDragOverEvent(event: any) {
    if (this.dragable) {
    this.left = event.x - this.offsetX + 'px';
    this.top = event.y - this.offsetY + 'px';
    event.preventDefault();
  }
  }

  private onDragStart(event: any) {
    this.offsetX = event.x - parseInt(this.left);
    this.offsetY = event.y - parseInt(this.top);
  }

  private doStuff() {
    this.data.elements[0].childs.push({name:"pushTest"});
  }

  private getKeysToObject() {
    let keys: string[] = [];
    for (let k in this.data) keys.push(k);
    return keys;
  }

  private getTypeforKeys(keys: string[]) {
    let types: string[] = [];
    for (let i = 0; i < keys.length; i++) {
      types.push(typeof(this.data[keys[i]]))
    }
    return types;
  }

  private combineKeysAndTypes(keys: string[], types: string[]) {
    let combinedArray: Object[] = [];
    for (let j = 0; j < keys.length; j++) {
      combinedArray.push({key: keys[j], type: types[j]});
    }
    return combinedArray;
  }

  ngOnInit() {
    let type = typeof(this.data);
    //console.log(this.data instanceof Array);
    if (type == "object" ) {
      let keys = this.getKeysToObject();
      let types = this.getTypeforKeys(keys);
      let combindedArray = this.combineKeysAndTypes(keys, types);
      this.iterArray = combindedArray;
      this.done = true;
    } else if ( type == "array") {
      //console.log('Array Found');
    }
  }
}

/*
 <input [(ngModel)]="data.metadata.defaultElement.dimensions.height">
 <button (click)="doStuff()">hallo</button>
 */
