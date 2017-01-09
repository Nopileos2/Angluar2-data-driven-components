import {SidebarEntry, SidebarComplete} from '../datatypes/sidebar.type';
export const SidebarData :SidebarComplete = {
  metadata:{
    defaultBorder:{
      borderLeft:"6px solid green",
      borderRight:"0px solid red",
      borderTop:"0px solid red",
      borderBottom:"0px solid red",
      borderRadius:"5px"
    },
    defaultElement:{
      color:"black",
      backgroundColor:"lightgray",
      background: 'linear-gradient(to bottom right, red, yellow)',
      backgroundColorHover:'red'
    },
    misc: {
      marginLeftIncrease:10,
      marginTop:"5px"
    }
  },
  elements: [{
    name:"1",
    backgroundColorHover:'green',
    border:{
      borderLeft:"6px solid green",
      borderRight:"1px solid red",
      borderTop:"1px solid red",
      borderBottom:"1px solid red",
      borderRadius:"3px"
    },
    childs:[{name:"3",color:"blue",childs:[{name:"99",color:"blue"}]},{name:"4",color:"blue"}]},{name:"2",color:"blue"}]
}
