import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getDataFromYandex() {
    this.http.get('https://ya.ru/').subscribe((data: any) => console.log(data));
  }
}
