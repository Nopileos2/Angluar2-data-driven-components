import { Directive, ElementRef, HostListener,HostBinding, Input, DoCheck,OnInit} from '@angular/core';


@Directive({
  selector: '[sidebarstyle]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class SidebarStyle implements OnInit,DoCheck{
  constructor(private el: ElementRef) { }

  @Input('sidebarstyleobj') sidebarStyles: any;
  //@Input('sidebarhover') hoverColor:string;


  onMouseEnter() { this.el.nativeElement.style.backgroundColor = this.sidebarStyles.backgroundColorHover;}
  onMouseLeave() { this.el.nativeElement.style.backgroundColor = this.sidebarStyles.backgroundColor;}





  ngDoCheck(){
    //Text Style
    this.el.nativeElement.style.fontSize = this.sidebarStyles.textStyles.fontSize;
    this.el.nativeElement.style.textAlign = this.sidebarStyles.textStyles.textAlign;
    this.el.nativeElement.style.textDecoration = this.sidebarStyles.textStyles.textDecoration;
    this.el.nativeElement.style.fontStyle = this.sidebarStyles.textStyles.fontStyle;
    this.el.nativeElement.style.textIndent = this.sidebarStyles.textStyles.textIndent;
    this.el.nativeElement.style.textShadow = this.sidebarStyles.textStyles.textShadow;
    this.el.nativeElement.style.fontWeight = this.sidebarStyles.textStyles.fontWeight;
    //Border
    this.el.nativeElement.style.borderLeft = this.sidebarStyles.borderStyles.borderLeft;
    this.el.nativeElement.style.borderRight = this.sidebarStyles.borderStyles.borderRight;
    this.el.nativeElement.style.borderTop = this.sidebarStyles.borderStyles.borderTop;
    this.el.nativeElement.style.borderBottom = this.sidebarStyles.borderStyles.borderBottom;
    this.el.nativeElement.style.borderRadius = this.sidebarStyles.borderStyles.borderRadius;
    //Colors12
    this.el.nativeElement.style.color = this.sidebarStyles.color;
    //Dimensions
    this.el.nativeElement.style.minWidth = this.sidebarStyles.dimensions.minWidth;
    this.el.nativeElement.style.width = this.sidebarStyles.dimensions.width;
    this.el.nativeElement.style.maxWidth = this.sidebarStyles.dimensions.maxWidth;
    this.el.nativeElement.style.minHeight = this.sidebarStyles.dimensions.minHeight;
    this.el.nativeElement.style.height = this.sidebarStyles.dimensions.height;
    this.el.nativeElement.style.maxHeight = this.sidebarStyles.dimensions.maxHeight;
    if(parseInt(this.sidebarStyles.dimensions.height) <= parseInt(this.sidebarStyles.dimensions.minHeight)){
      this.el.nativeElement.style.lineHeight =  this.sidebarStyles.dimensions.minHeight;
    } else if(parseInt(this.sidebarStyles.dimensions.height) >= parseInt(this.sidebarStyles.dimensions.maxHeight)){
      this.el.nativeElement.style.lineHeight =  this.sidebarStyles.dimensions.maxHeight;
    } else {
      this.el.nativeElement.style.lineHeight = this.sidebarStyles.dimensions.height;
    }


  }
  ngOnInit(){
    //in Init because it would override the mousevents in DoCheck()
    this.el.nativeElement.style.backgroundColor = this.sidebarStyles.backgroundColor;
  }
}


