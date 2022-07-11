import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(private router: Router) {

  }

  pages = ['1', '2', '3', '4', '5']

  ngOnInit(): void {
    console.log(this.router)
  }

}
