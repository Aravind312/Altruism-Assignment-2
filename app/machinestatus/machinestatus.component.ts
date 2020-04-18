import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-machinestatus',
  templateUrl: './machinestatus.component.html',
  styleUrls: ['./machinestatus.component.css']
})
export class MachinestatusComponent implements OnInit {

  constructor() { }
  monthlyMonitoringChart;
  ngOnInit() {
    this.monthlyMonitoringChart = new Chart("monthlyMonitoringChart", {
      type: 'bar',
      data: {
          labels: ["01-04-2020","02-04-2020","03-04-2020","04-04-2020","05-04-2020","06-04-2020","07-04-2020","08-04-2020","09-04-2020","10-04-2020","11-04-2020","12-04-2020","Yesterday","Today",],
          datasets: [
        {
              label: 'Running',
              backgroundColor: "green",
              data: [7,3,3,5,8,1,4,6,7,6,8,2,4,6],
      },
      {
        label: 'off',
        backgroundColor: "red",
        data: [7,1,4,6,7,6,8,3,2,4,6,3,5,8],
      },
      {
              label: 'idle',
              backgroundColor: "grey",
              data: [7,3,4,6,7,6,8,3,2,4,6,3,5,8],
      },
      {
        label: 'Maintenance',
        backgroundColor: "yellow",
        data: [7,1,4,6,7,6,8,3,2,4,6,3,5,8],
      },
    ],
      },
  options: {
      tooltips: {
        displayColors: true,
        callbacks:{
          mode: 'x',
        },
      },
      scales: {
        xAxes: [{
          stacked: true,        
          barPercentage: 0.4,
          gridLines: {
            display: false,
          }
        }],
        yAxes: [{
          stacked: true,
          barPercentage: 0.4,
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
        }]
      },
          responsive: true,
          maintainAspectRatio: false,
          legend: { position: 'bottom' },
      }
  });
  
  
  
  
  }

}
