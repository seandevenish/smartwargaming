import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';


const routes: Routes = [
  {
    path: 'characters', component: CharactersComponent,
    data: {title: 'Characters'}
  },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent, data: {title: '404 Not Found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
