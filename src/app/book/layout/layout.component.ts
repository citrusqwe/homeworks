import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor(private router: Router) {
  }

  access = true

  ngOnInit(): void {
    this.access = !this.router.url.includes('table')
  }

}
