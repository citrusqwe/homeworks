import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

interface RightsResponse {
  data: string[]
}

@Injectable({
  providedIn: 'root'
})
export class RightsService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  getRights(): Observable<RightsResponse> {
    return this.http.get<RightsResponse>('https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights.json')
  }

  getAllRights(): Observable<RightsResponse> {
    return this.http.get<RightsResponse>('https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights-full.json')
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK');
  }
}
