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
  selector: 'editor-primitive-input',
  moduleId: module.id,
  templateUrl: 'editor-primitive-input.template.html',
  styleUrls: ['editor-primitive-input.stylesheet.css'],

})

export class EditorPrimitiveInput implements OnInit {
  @Input('data') data: any;
  @Input('controlData') controlData: any;
  @Input('name') name: string;
  typeArray: string[];
  selectArray: Array<string[]> = [];
  nameArray:string[] = [];
  selectArrayIndex: number = 0;

  private interpretControlData() {
    let typeArray = this.controlData[this.name].split(' ');
    this.typeArray = typeArray;
    this.getNameArray();
    this.checkForSelect();
  }
  private getNameArray(){
    for(let i=0;i<this.typeArray.length;i++){
      if(this.typeArray[i].includes('?')){
        let tmpSplit = this.typeArray[i].split('?');
        tmpSplit = tmpSplit[1].split(':');
        this.nameArray.push(tmpSplit[0]);
        this.typeArray[i] = this.typeArray[i].replace('?'+tmpSplit[0],'');
      } else {
        this.nameArray.push('Value');
      }
    }
  }
  private checkForSelect() {
    let element: string = '';
    for (let i=0; i < this.typeArray.length; i++) {
      element = this.typeArray[i];
      let elementSplitted = element.split(':');
      if (elementSplitted[0] == 'select') {
        this.typeArray[i] = 'select';
        if (elementSplitted[1].startsWith('@')) {
          let tmpName:string = elementSplitted[1];
          tmpName = tmpName.replace('@','');
          let types:string[] = this.controlData[tmpName].split('|');
          this.selectArray.push(types);
        } else {
          let types: string[] = elementSplitted[1].split('|');
          this.selectArray.push(types);
        }
      } else {
        this.selectArray.push([])
      }
    }
  }

  private getSelectArrayEntry(): string[] {
    let ret: string[] = this.selectArray[this.selectArrayIndex];
    this.selectArrayIndex++;
    return ret;
  }

  ngOnInit() {
    if (this.controlData[this.name] != undefined) {
      this.interpretControlData();
    } else {

    }
  }
}
