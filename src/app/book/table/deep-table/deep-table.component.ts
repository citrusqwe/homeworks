import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-deep-table',
  templateUrl: './deep-table.component.html',
  styleUrls: ['./deep-table.component.scss']
})
export class DeepTableComponent implements OnInit {
  @Input() extendedData: any[] = []
  displayedColumnsInside: string[] = ['position', 'name', 'weight', 'displayedInCell'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
