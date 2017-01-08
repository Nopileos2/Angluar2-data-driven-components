export interface SidebarEntry {
  name:string;
  color:string;
  childs?: SidebarEntry[];
}

export interface SidebarComplete {
  metadata?:any;
  elements: SidebarEntry[];
}
