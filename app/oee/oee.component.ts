import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.css']
})
export class OeeComponent implements OnInit {

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
          data: [80,88,86,84,83,82,84,86,84,88],
          borderColor: 'blue',
        },
        {
          label: 'Power',
          backgroundColor: "transparent",
          data: [64,77,66,68,62,68,64,62,66,68],
          borderColor: 'orange',
        },
        {
          label: 'Power',
          backgroundColor: "transparent",
          data: [ 50,52,55,57,52,56,58,54,56,58 ],
          borderColor: 'grey',
        },
        {
          label: 'Power',
          backgroundColor: "transparent",
          data: [48,46,44,42,40,38,36,44,46,48],
          borderColor: 'yellow',
        },
        ],
      },
      options: {
        legend: {
          display:false,
          labels: {
              fontColor: "white",
              fontSize: 14,
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
            ticks:
            {
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
      data:  {
        labels: ["machine 2","machine 4","machine 5","machine 1","machine 3","machine 6","machine 7"],
        datasets: [
          {
          backgroundColor: "blue",
          data: [80,70,60,65,50,40,45,30]
          },
        ]
      },
      options: {
        
        responsive: true,
        legend: {
          display:false,
          position: "top",
          fontColor:"white",
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: "black",
              fontSize:30,
            },
            scaleLabel: {
              display: false,
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: "black",
              fontSize:20,
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
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        datasets: [{
          fill: false,
          data: []
        }, {
          type: 'bar',
          label: 'Operator',
          backgroundColor: ["green","red","green","green","green","red","green","red","green","green","red","green","red","green","green","red","green","red"],      
          data: [2, 4, 1, 3, 7, 3, 6,8,2,5,8,12,18,2,18,5,8,12],
          borderWidth: 2
        }, ]
      },
      options: {
        legend: {
          display:false,
          labels: {
              fontColor: "white",
              fontSize: 16,
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
                      display: true,
                      labelString: 'Downtime'
                    }
          }],
          xAxes: [{
            ticks:
            {
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
