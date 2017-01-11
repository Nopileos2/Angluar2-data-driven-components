import { Component, OnInit,trigger,HostListener,  state,  style,  transition,  animate,Input,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'editor-element',
  moduleId: module.id,
  templateUrl: 'editor-element.template.html',
  styleUrls:['editor-element.stylesheet.css'],

})

export class EditorElement implements OnInit{
  @Input('data') data:any;
  @Input('name') name:string;
  @Input('margin') margin:number;
  done:boolean = false;
  iterArray:Object[] = [];
  isPrimitive:boolean = false;
  showChildren:boolean = false;
  newMargin:number;
  rotation:string= 'rotate(0deg)';

  private getKeysToObject() {
    let keys: string[] = [];
    for (let k in this.data) keys.push(k);
    return keys;
  }
  private getTypeforKeys(keys:string[]){
    let types:string[] = [];
    for(let i=0;i<keys.length;i++){
      types.push(typeof(this.data[keys[i]]))
    }
    return types;
  }
  private combineKeysAndTypes(keys:string[],types:string[]){
    let combinedArray:Object[] = [];
    for (let j=0;j<keys.length;j++){
      combinedArray.push({key:keys[j],type:types[j]});
    }
    return combinedArray;
  }
  private checkIfPrimitve(combindedArray:any){
      let length = combindedArray.length;
      if(length == 1) {
        if (combindedArray[0].type == 'object' ||combindedArray[0].type == 'array') {
          return false;
        } else {
          return true;
        }
      }
      return false;
  }
  private onClick(){
    this.showChildren = !this.showChildren;
    console.log(this.rotation);
    if(this.rotation == 'rotate(0deg)'){
      this.rotation = 'rotate(90deg)'
    } else {
      this.rotation = 'rotate(0deg)'
    }
  }
  ngOnInit(){
    this.newMargin = this.margin +5;
    let type = typeof(this.data);
    if(type == "object" || type == "array") {
      let keys = this.getKeysToObject();
      let types = this.getTypeforKeys(keys);
      let combindedArray = this.combineKeysAndTypes(keys, types);
      this.isPrimitive = this.checkIfPrimitve(combindedArray);
      this.iterArray = combindedArray;
      this.done = true;
    } else {
      console.log('Primitive');
      this.isPrimitive = true;
      this.done = true;
    }

  }
}

