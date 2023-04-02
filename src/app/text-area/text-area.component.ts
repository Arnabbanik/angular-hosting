import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  title: string ="String interpolation";//String interpolation
  
  //property binding
  property: boolean = false;
  expression: string = "background-color: yellow";
  fontcolor: string = "red";

  //event binding
  visible: boolean = false;
  onSubmit(){
     this.visible = true;
  }

  searchval: string = 'Arnab';
  changesearchval(eventData: any){
    this.searchval = (<HTMLInputElement>eventData.target).value;
  }

  //two-way data binding

}
