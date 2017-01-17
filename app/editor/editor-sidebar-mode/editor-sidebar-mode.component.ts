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
  selector: 'editor-sidebar-mode',
  moduleId: module.id,
  templateUrl: 'editor-sidebar-mode.template.html',
  styleUrls: ['editor-sidebar-mode.stylesheet.css'],

})

export class EditorSidebarMode implements OnInit {
  constructor() {
  }

  @Input('data') data: any;
  Elements: string;

  private onKeyDown(e: any) {
    if (e.keyCode == 9 || e.which == 9) {
      e.preventDefault();
      let s = e.target.selectionStart;
      e.target.value = e.target.value.substring(0, e.target.selectionStart) + "\t" + e.target.value.substring(e.target.selectionEnd);
      e.target.selectionEnd = s + 1;
    }
  }

  private onKeyUp(event: any) {
    let text = event.target.value.replace(/>/g,'');
    let splittedTextEnter = text.split('\n');
    splittedTextEnter = this.removeEmptylines(splittedTextEnter);
    let indentArray: number[] = [];
    let indent: number = 0;
    for (let k = 0; k < splittedTextEnter.length; k++) {
      let splittedElement = splittedTextEnter[k];
      let indent = this.getIndent(splittedElement);
      indentArray.push(indent);
    }
    if (this.checkStructure(indentArray)) {
      this.prepareChangeData(splittedTextEnter, indentArray);
    }
    //console.log(indentArray);
    //console.log(this.checkStructure(indentArray));
  }

  private removeEmptylines(splittedTextEnter:string[]):string[] {
    //remove TABS
    let cleanSplittedText:string[] = [];
    for(let i=0;i<splittedTextEnter.length;i++) cleanSplittedText.push(splittedTextEnter[i].replace(/\t/g,''))

    let index = cleanSplittedText.indexOf("");
    while(index != -1){
      splittedTextEnter.splice(index,1);
      cleanSplittedText.splice(index,1);
      index = cleanSplittedText.indexOf("");
    }
    return splittedTextEnter;
  }

  private prepareChangeData(splittedTextEnter: string[], indentArray: number[]) {
    //remove \t from every Element
    for(let i=0;i<splittedTextEnter.length;i++) splittedTextEnter[i] = splittedTextEnter[i].split('\t')[indentArray[i]];
    let elementArray = this.buildArray(splittedTextEnter,indentArray,0,0,splittedTextEnter.length-1);
    this.changeData(this.data,elementArray);
  }

  private changeData(realObject:any[],newObject:any[]) {
    let length1 = realObject.length;
    let length2 = newObject.length;
    let diff = length2-length1;
    let min = Math.min(length1,length2);
    for(let i=0;i<min;i++){
      realObject[i].name = newObject[i].name;
      if(newObject[i].childs != undefined) {
        if(realObject[i].childs == undefined) realObject[i].childs = [];
        this.changeData(realObject[i].childs,newObject[i].childs);

      }
    }
    if (diff > 0){
      for(let j=length1;j<length2;j++) realObject.push(newObject[j])
    } else if(diff < 0){
      for(let j=length2;j<length1;j++) realObject.pop()
    }

  }

  private buildArray(splittedTextEnter: string[], indentArray: number[],indent:number,lowerIndex:number,upperIndex:number){
    //find all elements for input indent in the indentArray
    let returnArray:any[] = [];
    let findArray:number[] = [];
    for(let j=lowerIndex;j<= upperIndex;j++){
      if(indentArray[j] == indent) findArray.push(j)
    }
    for(let k=0;k<findArray.length;k++){
      let newLower = findArray[k];
      let newUpper = findArray[k+1];
      if(findArray[k+1] == undefined) newUpper = upperIndex;
      returnArray.push({name:splittedTextEnter[newLower],childs:this.buildArray(splittedTextEnter,indentArray,indent+1,newLower,newUpper)});
    }
    return returnArray;

  }

  private checkStructure(numberArray: number[]): boolean {
    let diff: number = 0;
    for (let n = 0; n < numberArray.length - 1; n++) {
      if (numberArray[n] < numberArray[n + 1]) {
        diff = Math.abs(numberArray[n] - numberArray[n + 1]);
        if (diff > 1) return false
      }
    }
    return true;
  }

  private getIndent(text: string): number {
    let splittedText = text.split('\t');
    let returnnumber: number = 0;
    for (let m = 0; m < splittedText.length; m++) {
      if (splittedText[m] == '') {
        returnnumber++;
      } else {
        break;
      }
    }
    return returnnumber
  }

  private addIndent(text: string, indent: number) {
    for (let j = 0; j < indent; j++) text += '\t';
    return text;
  }

  private parseObjectToText(array: any[], outputText: string, indent: number): string {
    for (let i = 0; i < array.length; i++) {
      outputText = this.addIndent(outputText, indent);
      outputText += '>' + array[i].name + '\n';
      if (array[i].childs != undefined) {
        outputText = this.parseObjectToText(array[i].childs, outputText, indent + 1)
      }
    }
    return outputText;
  }

  ngOnInit() {
    console.log('data',this.data);
    this.Elements = this.parseObjectToText(this.data, '', 0);

  }
}
