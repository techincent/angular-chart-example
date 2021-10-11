import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [{ borderColor: 'black', backgroundColor: 'rgba(255,0,0,0.3)'}];
  lineChartLegend = true;
  lineChartType: string = 'line';
  lineChartPlugins = [];
  chart: any;
  constructor() { }

  ngOnInit(): void { }
}
