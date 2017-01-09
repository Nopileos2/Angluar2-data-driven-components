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
      backgroundColorHover:'red',
      textstyle:{
        fontSize:'15px',
        textAlign:'left',
        textDecoration:'none',
        fontStyle:'normal',
        textIndent:'10px',
        textShadow:'none',
        fontWeight:'normal'
      },
      dimensions:{
        minWidth:'100px',
        width:'90%',
        maxWidth:'1000px',
        minHeight:'20px',
        height:'30px',
        maxHeight:'100px',
      }
    },
    misc: {
      marginLeftIncrease:10,
      marginTop:"5px"
    }
  },
  elements: [{
    name:"1032843 AAksj 234",
    backgroundColorHover:'green',
    color:'red',
    border:{
      borderLeft:"6px solid green",
      borderRight:"1px solid red",
      borderTop:"1px solid red",
      borderBottom:"1px solid red",
      borderRadius:"3px"
    },
    dimensions:{
      minWidth:'100px',
      width:'50%',
      maxWidth:'1000px',
      minHeight:'20px',
      height:'40px',
      maxHeight:'100px',
    },
    childs:[{
      name:"3",
      color:"blue",
      dimensions:{
        minWidth:'100px',
        width:'90%',
        minHeight:'20px',
        maxHeight:'100px',
      },
      childs:[{name:"99",color:"blue"}]},{name:"4",color:"blue"}]},{name:"2",color:"blue"}]
}
