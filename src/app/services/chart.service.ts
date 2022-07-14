import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AssemblyApiResponse} from "../chart/chart.component";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) {
  }

  getAssemblyData(): Observable<AssemblyApiResponse> {
    return this.http.get<AssemblyApiResponse>('https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json')
  }
}
