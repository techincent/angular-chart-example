import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

const routes: Routes = [
  {
    path: 'line-chart',
    component: LineChartComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  },
  {
    path: 'bar-chart',
    component: BarChartComponent
  },
  {
    path: 'doughnut-chart',
    component: DoughnutChartComponent
  },
  {
    path: 'polar-chart',
    component: PolarChartComponent
  },
  {
    path: 'radar-chart',
    component: RadarChartComponent
  },
  {
    path: 'bubble-chart',
    component: BubbleChartComponent
  },
  {
    path: 'scatter-chart',
    component: ScatterChartComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'line-chart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
