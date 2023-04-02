import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarosalComponent } from './carosal/carosal.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { FormsModule } from '@angular/forms';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { ParentComponent } from './ParentchildComponents/parent/parent.component';
import { ChildComponent } from './ParentchildComponents/child/child.component';
import { PComponent } from './ptocex/p/p.component';
import { CComponent } from './ptocex/c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarosalComponent,
    TextAreaComponent,
    DirectiveExampleComponent,
    ParentComponent,
    ChildComponent,
    PComponent,
    CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
