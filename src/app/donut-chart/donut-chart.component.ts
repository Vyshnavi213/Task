import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';
import { ChartType, ChartDataSets } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})

export class DonutChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let ctx = <HTMLCanvasElement>document.getElementById('dnut');
    ctx.height = 200;
    ctx.width = 300;
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Preferred', 'Acceptable', 'Discouraged', 'Unacceptable', 'PADU Pending'],
        datasets: [
          {
            data: [120, 150, 180, 90, 75],
            label: 'Series A',
            backgroundColor: [
              "green",
              "blue",
              "yellow",
              "red",
              "grey"
            ],
            borderWidth: 1,
          }]
      },
      options: {
          maintainAspectRatio: false,
        plugins: {
          labels: {
            render: 'percentage',
            // precision: 2,
            // arc: true,
          }
        },
        cutoutPercentage: 60,
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        },
        legend: {
          labels: {
            fontSize: 10,
          }
        }
      }
    });
  }

}

