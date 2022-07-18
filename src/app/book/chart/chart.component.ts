import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChartService} from "../../services/chart.service";
import {mergeMap, Subscription, toArray} from "rxjs";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
      .pipe(mergeMap(({data}) => data.reverse()))
      .pipe(toArray())
      .subscribe((data: AssemblyItem[]) => {
        const assemblyChart = new Chart(
          'assemblyChart', {
            type: 'line',
            data: {
              datasets: [
                {
                  label: 'Всего',
                  data,
                  backgroundColor: 'rgba(232,17,17,0.8)',
                  borderColor: 'rgba(232,17,17,0.8)',
                  parsing: {
                    yAxisKey: 'qty_shk'
                  }, datalabels: {
                    formatter: function (value) {
                      return value.qty_shk;
                    }
                  }
                }, {
                  label: 'Этап 1',
                  data,
                  backgroundColor: 'rgb(157,190,48)',
                  borderColor: 'rgb(157,190,48)',
                  parsing: {
                    yAxisKey: 'qty_shk_cat1'
                  },
                  datalabels: {
                    formatter: function (value) {
                      return value.qty_shk_cat1;
                    }
                  }
                }, {
                  label: 'Этап 2',
                  data,
                  backgroundColor: 'rgb(28,185,23)',
                  borderColor: 'rgb(28,185,23)',
                  parsing: {
                    yAxisKey: 'qty_shk_cat2'
                  }
                  , datalabels: {
                    formatter: function (value) {
                      return value.qty_shk_cat2;
                    }
                  }
                }, {
                  label: 'Этап 3',
                  data,
                  backgroundColor: 'rgb(30,64,204)',
                  borderColor: 'rgb(30,64,204)',
                  parsing: {
                    yAxisKey: 'qty_shk_cat3'
                  },
                  datalabels: {
                    formatter: function (value) {
                      return value.qty_shk_cat3;
                    }
                  }
                }, {
                  label: 'Этап 4',
                  data,
                  backgroundColor: 'rgb(141,37,197)',
                  borderColor: 'rgb(141,37,197)',
                  parsing: {
                    yAxisKey: 'qty_shk_cat4'
                  },
                  datalabels: {
                    formatter: function (value) {
                      return value.qty_shk_cat4;
                    }
                  }
                },
              ]
            },
            plugins: [ChartDataLabels],
            options: {
              parsing: {
                xAxisKey: 'dt_date'
              },
              plugins: {
                datalabels: {
                  color: '#000000',
                  align: 'top'
                }
              },
              elements: {
                line: {tension: 0.4}
              }
            },
          }
        );

        let shk1 = 0,
          shk2 = 0,
          shk3 = 0,
          shk4 = 0

        data.forEach((val: AssemblyItem) => {
          shk1 += val.qty_shk_cat1
          shk2 += val.qty_shk_cat2
          shk3 += val.qty_shk_cat3
          shk4 += val.qty_shk_cat4
        })

        const assemblyChartCircle = new Chart(
          'assemblyChartCircle', {
            type: 'pie',
            data: {
              labels: [
                'Этап 1',
                'Этап 2',
                'Этап 3',
                'Этап 4'
              ],
              datasets: [
                {
                  data: [shk1, shk2, shk3, shk4],
                  label: 'test',
                  backgroundColor: [
                    'rgb(157,190,48)',
                    'rgb(28,185,23)',
                    'rgb(30,64,204)',
                    'rgb(141,37,197)',
                  ],
                  hoverOffset: 4,
                  parsing: {
                    key: 'qty_shk_cat1'
                  }
                },
              ]
            }
          })
      })
  }

  ngOnDestroy() {
    this.assemblyDataSub?.unsubscribe()
  }

}
