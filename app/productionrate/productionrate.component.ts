import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-productionrate',
  templateUrl: './productionrate.component.html',
  styleUrls: ['./productionrate.component.css']
})
export class ProductionrateComponent implements OnInit {

  constructor() { }
  powerVsProd;
  downtime;
  monitoringChart;
  ngOnInit() {
    this.powerVsProd = new Chart("powerVsProd", {
      type: 'line',
      data: {
        labels: ["day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7", "day 8", "day 9", "day 10",],
        datasets: [{
          label: 'Power',
          backgroundColor: "transparent",
          data: [46, 50, 32, 20, 48, 68, 88, 86, 84, 82],
          borderColor: 'red',
        }, {
          label: 'Power',
          backgroundColor: "transparent",
          data: [42, 58, 38, 26, 48, 62, 88, 82, 84, 88],
          borderColor: 'white',
        },
        ],
      },
      options: {
        legend: {
          display:false,
          labels: {
              fontColor: "white",
              fontSize: 16,
          },
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            mode: 'x',
          },
        },
        scales: {
          xAxes: [{
            stacked: false,
            ticks: {
              fontColor: "white",
            },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: false,
              fontColor: "white",
            },
            type: 'linear',
          }]
        },
        responsive: true,
        maintainAspectRatio: false,
       
      }
    });
    this.downtime = new Chart('downtime', {
      type: "bar",
      data :{
        labels: ["machine 2", "machine 4", "machine 5", "machine 1", "machine 3", "machine 6", "machine 7"],
       
        datasets: [{
          label: "Achived",
          backgroundColor: 'blue',
          data:[10,5,18,16,12,10,30, 25,25,10] ,
          xAxisID: "bar-x-axis2",
          stack: "background"
        }, {
          label: "Target",
          backgroundColor: 'yellow',
          data: [18,28,15,5,18,15, 20, 15,5],
          xAxisID: "bar-x-axis2",
          stack: "background"
        },]
      },
      options: {
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 18
          },
        },
        scales: {
          xAxes: [{
            id: "bar-x-axis2",
            stacked: true,
            ticks:{
              fontColor: "white",
            },
            categoryPercentage: 0.5,
            barPercentage: 0.5,
          }, {
            display: false,
            id: "bar-x-axis1",
            type: 'category',
            categoryPercentage: 0.4,
            barPercentage: 1,
            gridLines: {
              offsetGridLines: false
            },
            stacked: true
          }],
          yAxes: [{
            ticks:
            {
              fontColor: "white",
            },
          }]

        }
      },
     
    });
    this.monitoringChart = new Chart("monitoringChart", {
      type: "bar",
      data :{
        labels: [1,2,3,4,5,67,8,9,10,11,12,14,16],
        datasets: [{
          label: "Achived",
          backgroundColor: 'yellow',
          data: [15, 20, 25,10,10,5,18,16,12,10,10,5,8,9],
          xAxisID: "bar-x-axis2",
          stack: "background"
        }, {
          label: "Target",
          backgroundColor: 'green',
          data: [30, 25, 15,5,18,28,15,5,18,18,48,6,8],
          xAxisID: "bar-x-axis2",
          stack: "background"
        },]
      },
      options: {
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 18
          },
        },
        scales: {
          xAxes: [{
            id: "bar-x-axis2",
            stacked: true,
            categoryPercentage: 0.5,
            barPercentage: 0.5,
          }, {
            display: false,
            id: "bar-x-axis1",
            type: 'category',
            categoryPercentage: 0.4,
            barPercentage: 1,
            ticks:
            {
              fontColor: "white",
            },
            gridLines: {
              offsetGridLines: true
            },
            stacked: true
          }],
          yAxes: [{
            ticks:
            {
              fontColor: "white",
            },
            max: 100,
            min: 0,
            stacked: true,
          }]

        }
      },
});
  /* this.monitoringChart = new Chart("monitoringChart", {

   });*/
}

}
