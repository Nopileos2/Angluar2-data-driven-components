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
  selector: 'select-input',
  moduleId: module.id,
  template: `
<label class="select-label">{{inputName}}:</label>
<select class="select-input" (change)='changeData()' [(ngModel)]="selectedValue">
    <option *ngFor="let s of selectArray" [ngValue]="s">{{s}}</option>
</select>
`,
  styleUrls: ['input-elements.stylesheet.css']

})

export class SelectInput implements OnInit{
  @Input('data') data:any;
  @Input('name') name:string;
  @Input('index') index:any;
  @Input('selectArray') selectArray:string[];
  @Input('inputName') inputName:string;
  selectedValue:string;
  dataSplitted:string[];
  private changeData(){
    this.dataSplitted[this.index] = this.selectedValue;
    let newData:string = '';
    for(let j=0;j<this.dataSplitted.length;j++) newData += this.dataSplitted[j]+' ';
    this.data[this.name] = newData;
  }
  ngOnInit(){
    this.dataSplitted = this.data[this.name].split(' ');
    this.selectedValue = this.dataSplitted[this.index]
  }
}
