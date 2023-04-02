import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent {

  @Input() cval: string = "";
  
  ngOnInit(){

    console.log(this.cval);
  }
}
