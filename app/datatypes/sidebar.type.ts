export interface SidebarEntry {
  name:string;
  color?:string;
  backgroundColor?:string;
  backgroundColorHover?:string;
  textstyle?:any;
  dimensions?:any;
  border?:any;
  childs?: SidebarEntry[];
}

export interface SidebarComplete {
  metadata?:any;
  elements: SidebarEntry[];
}
