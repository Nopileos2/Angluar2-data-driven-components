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
    console.log(text);
    let splittedTextEnter = text.split('\n');
    splittedTextEnter = this.removeEmptylines(splittedTextEnter);
    let indentArray: number[] = [];
    let indent: number = 0;
    for (let k = 0; k < splittedTextEnter.length; k++) {
      let splittedElement = splittedTextEnter[k];
      let indent = this.getIndent(splittedElement);
      indentArray.push(indent);
    }
    console.log(splittedTextEnter);
    if (this.checkStructure(indentArray)) {
      this.changeData(splittedTextEnter, indentArray);
    }
    //console.log(indentArray);
    //console.log(this.checkStructure(indentArray));
  }

  private removeEmptylines(splittedTextEnter:string[]):string[] {
    let index = splittedTextEnter.indexOf("");
    while(index != -1){
      splittedTextEnter.splice(index,1);
      index = splittedTextEnter.indexOf("");
    }
    return splittedTextEnter;
  }

  private changeData(splittedTextEnter: string[], indentArray: number[]) {
     for(let l=0;l<splittedTextEnter.length;l++){
       let tabSplitted = splittedTextEnter[l].split('\t');
       let name = tabSplitted[indentArray[l]];
       this.changeElement(l,indentArray[l],name);
       console.log(name)
     }
  }
  private changeElement(position:number,indent:number,Name:string){
      let evalString = 'this.data.elements';
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

    console.log(this.data);
    this.Elements = this.parseObjectToText(this.data, '', 0);

  }
}
