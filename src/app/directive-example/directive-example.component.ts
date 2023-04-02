import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {

  display: boolean =false;
  fadeMeOut(){
     this.display = true;
  }
  products=[
    {title: "cardiology",subtitle: "DR s",description: "We have very experienced Doctors assembly",available: "Available"},
    {title: "Gynology",subtitle: "DR Basu",description: "We have very *experienced Doctors assembly", available: "Not Available"},
    {title: "ENT",subtitle: "DR Kanu",description: "We have very *experienced Doctors assembly", available:"Available"},
  ]
}
