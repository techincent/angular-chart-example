import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  lineChartData: any[] = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },];
  lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  lineChartLegend = true;
  lineChartType: string = 'line';
  lineChartPlugins = [];
  chart: any;
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.lineChartLabels,
        datasets: this.lineChartData
      },
    });
  }
  
  // [datasets]="lineChartData"
  // [labels]="lineChartLabels"
  // [options]="lineChartOptions"
  // [colors]="lineChartColors"
  // [legend]="lineChartLegend"
  // [chartType]="lineChartType"
  // [plugins]="lineChartPlugins"

}
