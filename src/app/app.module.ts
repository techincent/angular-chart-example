import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PolarChartComponent,
    RadarChartComponent,
    BubbleChartComponent,
    ScatterChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
