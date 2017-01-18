import {
  Component,
  OnInit,
  trigger,
  HostListener,
  state,
  style,
  transition,
  animate,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'editor-element',
  moduleId: module.id,
  templateUrl: 'editor-element.template.html',
  styleUrls: ['editor-element.stylesheet.css'],

})

export class EditorElement implements OnInit {
  @Input('data') data2: any;
  @Input('name') name: string;
  @Input('controlData') controlData:any;
  @Input('margin') margin: number;
  @Input('arrayBool') arrayBool:boolean;
  done: boolean = false;
  data: any;
  iterArray: Object[] = [];
  isPrimitive: boolean = false;
  showChildren: boolean = false;
  newMargin: number;
  rotation: string = 'rotate(0deg)';
  primitiveKey: string;
  isArray:boolean = false;

  private getKeysToObject() {
    let keys: string[] = [];
    for (let k in this.data) keys.push(k);
    return keys;
  }

  private getTypeforKeys(keys: string[]) {
    let types: string[] = [];
    for (let i = 0; i < keys.length; i++) {
      types.push(typeof(this.data[keys[i]]))
    }
    return types;
  }

  private combineKeysAndTypes(keys: string[], types: string[]) {
    let combinedArray: Object[] = [];
    for (let j = 0; j < keys.length; j++) {
      combinedArray.push({key: keys[j], type: types[j]});
    }
    return combinedArray;
  }

  private checkIfPrimitve(combindedArray: any) {
    let length = combindedArray.length;
    if (length == 1) {
      if (combindedArray[0].type == 'object' || combindedArray[0].type == 'array') {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  private onClick() {
    this.showChildren = !this.showChildren;
    if (this.rotation == 'rotate(0deg)') {
      this.rotation = 'rotate(90deg)'
    } else {
      this.rotation = 'rotate(0deg)'
    }
  }
  private log(stuff:any){
    console.log(stuff, this.name,this.arrayBool);
  }

  ngOnInit() {
    if(this.arrayBool){
      this.data = this.data2;
    } else{
      this.data = this.data2[this.name];
    }
    this.newMargin = this.margin + 5;
    let type = typeof(this.data);
    if (this.data instanceof Array) {
      //for(let i of this.data){
      //  console.log(i, i.name);
      //}
      let length = this.data.length;
      this.isArray = true;
      this.done = true;
    } else if (type == "object") {
      let keys = this.getKeysToObject();
      let types = this.getTypeforKeys(keys);
      let combindedArray = this.combineKeysAndTypes(keys, types);
      this.isPrimitive = this.checkIfPrimitve(combindedArray);
      this.iterArray = combindedArray;
      this.done = true;
    } else {
      let keys = this.getKeysToObject();
      this.primitiveKey = keys[0];
      this.isPrimitive = true;
      this.done = true;
    }

  }
}

