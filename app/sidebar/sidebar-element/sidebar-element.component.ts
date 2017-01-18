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
  @Input('element') element: SidebarEntry;
  @Input("margin") margin: any;
  @Input("metadata") metadata:any;
  newMargin: number;
  color: string = "green";
  haveChilds: boolean = false;
  isLeaf:boolean = false;
  doneLoading:boolean = false;
  displayChild:boolean = false;

  private showChild() {
    this.displayChild = !this.displayChild;
  }
  private getMargin(){
    return this.margin + parseInt(this.metadata.misc.marginLeftIncrease);
  }

  private getSidebarStyles(){
    let color = (this.element.color != undefined) ? this.element.color: this.metadata.defaultElement.color;
    let backgroundColor = (this.element.backgroundColor != undefined) ? this.element.backgroundColor: this.metadata.defaultElement.backgroundColor;
    let backgroundColorHover = (this.element.backgroundColorHover != undefined) ? this.element.backgroundColorHover: this.metadata.defaultElement.backgroundColorHover;
    let textStyles = (this.element.textstyle != undefined) ? this.element.textstyle: this.metadata.defaultElement.textstyle;
    let borderStyles = (this.element.border != undefined) ? this.element.border: this.metadata.defaultBorder;
    let dimensions = (this.element.dimensions != undefined) ? this.element.dimensions: this.metadata.defaultElement.dimensions;
    let sidebarStyleObj = {color,backgroundColor,backgroundColorHover,textStyles,borderStyles,dimensions};
    return sidebarStyleObj;
  }

  ngOnInit() {
    this.margin = parseInt(this.margin);
    if (this.element.childs != undefined) {
      this.haveChilds = true;
    } else {
      this.isLeaf = true;
    }
    this.doneLoading = true;
  }
}
//<li  *ngIf="doneLoading&&!isLeaf"><div class="SidebarElement" [style.margin-left]="margin + 'px'" [style.margin-top]="metadata.misc.marginTop" sidebarcolor [sidebarcolor2]="getColor()" [sidebarbackground]="getBackgroundColor()" [sidebarhover]="getBackgroundHoverColor()" sidebarborder [sidebarborderstyles]="getBorderStyle()" sidebartext [sidebartextstyle]="getTextStyle()" (click)="showChild()">{{element.name}}</div></li>
