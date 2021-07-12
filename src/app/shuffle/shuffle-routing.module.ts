import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShuffleComponent } from './shuffle.component';

const routes: Routes = [{ path: '', component: ShuffleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuffleRoutingModule { }
