import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChartService} from "../services/chart.service";
import {Subscription} from "rxjs";
import Chart from "chart.js/auto";

export interface AssemblyItem {
  "dt_date": string,
  "office_id": number,
  "office_name": string,
  "qty_shk": number,
  "qty_shk_cat1": number,
  "qty_shk_cat2": number,
  "qty_shk_cat3": number,
  "qty_shk_cat4": number
}

export interface AssemblyApiResponse {
  data: AssemblyItem[]
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {
  assemblyDataSub: Subscription | null = null

  constructor(private chartService: ChartService) {
  }

  ngOnInit(): void {
    this.assemblyDataSub = this.chartService.getAssemblyData()
      .subscribe(({data}: AssemblyApiResponse) => {
        const assemblyChart = new Chart(
          'assemblyChart', {
            type: 'line',
            data: {
              labels: data.map(item => item.dt_date),
              datasets: [{
                label: 'Коледино',
                data: data.map(item => item.qty_shk),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
              }]
            }
          }
        );
      })


  }

  ngOnDestroy() {
    this.assemblyDataSub?.unsubscribe()
  }

}
