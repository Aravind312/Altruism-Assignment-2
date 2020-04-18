import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-downtime',
  templateUrl: './downtime.component.html',
  styleUrls: ['./downtime.component.css']
})
export class DowntimeComponent implements OnInit {

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
          backgroundColor: "transparent",
          data: [46, 50, 32, 20, 48, 68, 88, 86, 84, 82],
          borderColor: 'white',
        },
        ],
      },
      options: {
        legend: {
          display:false,
          labels: {
            fontColor: "white",
            fontSize: 14,
            display:false
          },
          tooltips: {
            enabled: false
         }
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
      data: {
        labels: ["machine 2", "machine 4", "machine 5", "machine 1", "machine 3", "machine 6", "machine 7"],
        datasets: [
          {
            backgroundColor: "blue",
            data: [80, 70, 60, 65, 50, 40, 45, 30]
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          display:false,
          position: "top"
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 30,
            },
            scaleLabel: {
              display: false,
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 20,
            },
            scaleLabel: {
              display: false,

            }
          }]
        }
      }
    });
    this.monitoringChart = new Chart("monitoringChart", {
      type: 'bar',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
          fill: false,
          data: []
        }, {
          type: 'bar',
          label: 'Operator',
          backgroundColor: ["red", "green", "green", "red", "red", "green", "green", "red"],
          data: [2, 4, 1, 3, 7, 3, 6, 8],
          borderWidth: 2
        },]
      },
      options: {
        legend: {
          display:false,
          labels: {
            fontColor: "white",
            fontSize: 14,
            display:false,
          },
        },
        responsive: true,
        title: {
          display: false,
          text: 'Downtime'
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: "white",
            },
            scaleLabel: {
              display: false,
              labelString: 'Downtime'
            }
          }],
          xAxes: [{
            ticks:{
              fontColor: "white",
            },
            scaleLabel: {
              display: true,
              labelString: 'Timeframe'
            }
          }]
        }
      }
    });

  }

}
