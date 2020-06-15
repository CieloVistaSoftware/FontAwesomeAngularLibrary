import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { ComponentWithinComponent } from './component-within/component-within.component'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [LibComponent, ComponentWithinComponent],
  imports: [
    FontAwesomeModule
  ],
  exports: [LibComponent, ComponentWithinComponent]
})
export class LibModule { }
