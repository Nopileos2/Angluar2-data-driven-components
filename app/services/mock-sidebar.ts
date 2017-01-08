import {SidebarEntry, SidebarComplete} from '../datatypes/sidebar.type';
export const SidebarData :SidebarComplete = {
  metadata:{
    defaultBorder:{
      borderLeft:"6px solid green",
      borderRight:"0px solid red",
      borderTop:"0px solid red",
      borderBottom:"0px solid red",

    },
    defaultElement:{
      color:"black",
      backgroundColor:"lightgray",
      background: 'linear-gradient(to bottom right, red, yellow)'
    }
  },
  elements: [{name:"1",color:"blue", childs:[{name:"3",color:"blue",childs:[{name:"99",color:"blue"}]},{name:"4",color:"blue"}]},{name:"2",color:"blue"}]
}
