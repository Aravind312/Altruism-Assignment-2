import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {MatProgressBarModule} from '@angular/material'

@Component({
  selector: 'app-dashboardmain',
  templateUrl: './dashboardmain.component.html',
  styleUrls: ['./dashboardmain.component.css']
})
export class DashboardmainComponent implements OnInit {

  constructor() { }
  powerVsProd ;
  trendofdown;
  achivementVsTarget;
  achivementVsTarget2;
  ngOnInit() {
    
    //Stacked Bar
    this.powerVsProd = new Chart("powerVsProd", {
      type: 'line',
      data: {
        labels: ["day 1","day 2","day 3","day 4","day 5","day 6","day 7","day 8","day 9","day 10",],
        datasets: [{
          backgroundColor: "transparent",
          data: [46,55,30,40,45,68,68,75,84,82],
          borderColor: 'white',
        },
        {
          backgroundColor: "transparent",
          data: [48,58,34,40,48,68,68,78,88,82],
          borderColor: '#dc3545',
        }],
      },
      
      options: {
        legend: {
          display:false,
          labels: {
              display:false,
              fontColor: "white",
              fontSize: 16
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
              beginAtZero:false,
              fontColor: "white",
            },
            type: 'linear',
          }]
        },
        responsive: true,
        maintainAspectRatio: false,
        ticks: {
          fontColor: "white",
        },
      }
    });
    this.trendofdown = new Chart("trend", {
      type: 'line',
      data: {
        labels: ["d","d","d","d","d","d","d","d","d","d"],
        datasets: [{
          backgroundColor: "transparent",
          data: [80,76,74,70,68,62,60,58,54,40],
          borderColor: 'red',
        },
       ],
      },
      options: {
        legend: {
          display:false,
          labels: {
              fontColor: "white",
              fontSize: 16
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
            ticks:
            {
              fontColor: "white",
            },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero:false,  
              fontColor: "white",
            },
            type: 'linear',
          }]
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    this.achivementVsTarget = new Chart('achivementVsTarget', {
      type: "bar",
      data:  {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
          {
            label: 'Target',
          backgroundColor: "blue",
          data: [104, 101, 500, 700, 1200, 1500, 1300]
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: "top"
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,

            },
            scaleLabel: {
              display: true,
              labelString: 'Quanities'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Daily Production'
            }
          }]
        }
      }
    });
    this.achivementVsTarget2= new Chart('achivementVsTarget2', {
      type: "bar",
      data:  {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
          {
            label: 'Achivement vs Target',
          backgroundColor: "blue",
          data: [104, 101, 500, 700, 1200, 1500, 1300]
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: "top"
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Quanities'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Daily Production'
            }
          }]
        }
      }
    });
   
  }

}
