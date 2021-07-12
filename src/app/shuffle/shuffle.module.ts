import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShuffleRoutingModule } from './shuffle-routing.module';
import { ShuffleComponent } from './shuffle.component';


@NgModule({
  declarations: [
    ShuffleComponent
  ],
  imports: [
    CommonModule,
    ShuffleRoutingModule
  ],
  exports:[
    ShuffleComponent
  ]
})
export class ShuffleModule {


 }
