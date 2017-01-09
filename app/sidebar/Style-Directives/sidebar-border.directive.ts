import { Directive, ElementRef, HostListener,HostBinding, Input, DoCheck} from '@angular/core';


@Directive({
  selector: '[sidebarborder]'
})
export class SidebarBorder implements DoCheck{
  constructor(private el: ElementRef) { }

  //@HostBinding('style.color')
  //@Input('defaultColor') defaultColor:string;


  @Input('sidebarborderstyles') borderStyles: any;
  //@HostBinding('style.border-left') left:string = this.borderStyles.borderLeft;
  //@HostBinding('style.border-right') right:string = this.borderStyles.borderRight;
  //@HostBinding('style.border-top') top:string = this.borderStyles.borderTop;
  //@HostBinding('style.border-bottom') bottom:string =  this.borderStyles.borderBottom;
  /*@HostListener('mouseenter') onMouseEnter(){
   this.el.nativeElement.style.backgroundColor = "yellow";
   }*/
  ngDoCheck(){
    this.el.nativeElement.style.borderLeft = this.borderStyles.borderLeft;
    this.el.nativeElement.style.borderRight = this.borderStyles.borderRight;
    this.el.nativeElement.style.borderTop = this.borderStyles.borderTop;
    this.el.nativeElement.style.borderBottom = this.borderStyles.borderBottom;
    this.el.nativeElement.style.borderRadius = this.borderStyles.borderRadius;
  }

}
