import { Directive, ElementRef, HostListener,HostBinding, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[sidebarcolor]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class SidebarColor implements OnInit{
  constructor(private el: ElementRef) { this.el = el.nativeElement; }


  @HostBinding('style.color')
  @Input('sidebarcolor2') highlightColor: string;

  @HostBinding('style.background-color')
  @Input('sidebarbackground') backgroundColor:string;

  @Input('sidebarhover') hoverColor:string;

  onMouseEnter() { this.el.style.backgroundColor = this.hoverColor;}
  onMouseLeave() { this.el.style.backgroundColor = this.backgroundColor; }


  ngOnInit(){
  }
}
