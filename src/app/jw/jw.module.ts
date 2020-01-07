import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
import { IonicModule } from '@ionic/angular';

import { JwPage } from './jw.page';

const routes: Routes = [
  {
    path: '',
    component: JwPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ChartModule.forRoot(highcharts),
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JwPage]
})
export class JwPageModule {}
