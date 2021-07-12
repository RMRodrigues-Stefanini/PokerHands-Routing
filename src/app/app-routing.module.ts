import { MyGuardGuard } from './my-guard.guard';
import { HeaderComponent } from './components/header/header.component';
import { DeckComponent } from './components/deck/deck.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: 'headerComponent', component: HeaderComponent},
  { path: 'deckComponent', component: DeckComponent, canActivate: [MyGuardGuard],},
  { path: '', redirectTo: '/headerComponent', pathMatch: 'full' },
  { path: 'shuffle', canActivate: [MyGuardGuard], loadChildren: () => import('./shuffle/shuffle.module').then(m => m.ShuffleModule) },
  { path: 'notFound', loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule)},
  { path: '**', redirectTo: '/notFound', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
