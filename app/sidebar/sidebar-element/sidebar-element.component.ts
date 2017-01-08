import {Component, Input, OnInit, trigger,  state,  style,  transition,  animate} from '@angular/core';
import {SidebarEntry} from '../../datatypes/sidebar.type'

@Component({
  selector: 'sidebar-element',
  moduleId: module.id,
  templateUrl: 'sidebar-element.template.html',
  styleUrls: ['sidebar-element.stylesheet.css'],
  animations: [
    trigger(
      'flyInOut', [
        transition(':enter', [
          style({transform: 'translateX(-200px)', opacity: 0}),
          animate('300ms', style({transform: 'translateX(10px)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(10px)', 'opacity': 1}),
          animate('300ms', style({transform: 'translateX(-200px)', opacity: 0}))
        ])])]
})

export class SidebarElement implements OnInit {
  @Input() element: SidebarEntry;
  @Input("margin") margin: any;
  @Input("metadata") metadata:any;
  newMargin: number;
  color: string = "green";
  haveChilds: boolean = false;
  isLeaf:boolean = false;
  doneLoading:boolean = false;
  displayChild:boolean = false;
  state:string = "in";
  borderStyle:string = "dotted";

  private showChild() {
    this.displayChild = !this.displayChild;
  }

  ngOnInit() {
    this.margin = parseInt(this.margin);
    if (this.element.childs != undefined) {
      this.haveChilds = true;
      this.newMargin = this.margin + 10;
    } else {
      this.isLeaf = true;
    }
    console.log(this.isLeaf);
    this.doneLoading = true;
    this.borderStyle = this.metadata.defaultBorder.style;
  }
}
