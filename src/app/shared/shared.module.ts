import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    NgSelectModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
