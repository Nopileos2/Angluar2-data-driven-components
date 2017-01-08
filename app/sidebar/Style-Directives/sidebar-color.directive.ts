import { Directive, ElementRef, HostListener,HostBinding, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[sidebarcolor]'
})
export class SidebarColor implements OnInit{
  constructor(private el: ElementRef) { }

  //@HostBinding('style.color')
  //@Input('defaultColor') defaultColor:string;

  @HostBinding('style.color')
  @Input('sidebarcolor2') highlightColor: string;

  @HostBinding('style.background-color')
  @Input('sidebarbackground') backgroundColor:string;
  /*@HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = "yellow";
  }*/

  ngOnInit(){
    console.log("Hallo ",this.backgroundColor);
  }
}
