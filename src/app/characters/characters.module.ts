import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CharactersModule { }
