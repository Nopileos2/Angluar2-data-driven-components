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
  selector: 'size-input',
  moduleId: module.id,
  template: `
<label class="size-label">{{inputName}}:</label>
<input class="size-input-number" [(ngModel)]="myDataWihtoutUnit" type="number" (change)="changeData()" (keyup)="changeData()" >
<select class="size-input-unit" (change)='changeData()' [(ngModel)]="selectedValue">
    <option *ngFor="let u of unitArray" [ngValue]="u">{{u}}</option>
</select>
`,
  styleUrls: ['input-elements.stylesheet.css']

})

export class SizeInput implements OnInit{
@Input('data') data:any;
@Input('name') name:string;
@Input('index') index:any;
@Input('inputName') inputName:string;
done:boolean = false;
selectedValue:string ;
dataSplitted:string[];
myDataWihtoutUnit:number;
unitArray:string[] = ['px','%','vh','cm','mm'];

  private getUnit(text:string){
    return text.replace(/\d/g,'')
  }

  private changeData(){
    let newSize:string = this.myDataWihtoutUnit+this.selectedValue;
    this.dataSplitted[this.index] = newSize;
    let newData:string = '';
    for(let j=0;j<this.dataSplitted.length;j++) newData += this.dataSplitted[j]+' ';
    this.data[this.name] = newData;
  }

 ngOnInit(){
    this.dataSplitted = this.data[this.name].split(' ');
    let myData:string = this.dataSplitted[this.index];
    let unit:string = this.getUnit(myData);
    this.myDataWihtoutUnit = parseInt(myData);
    this.selectedValue = unit;
    this.done = true;
 }
}
