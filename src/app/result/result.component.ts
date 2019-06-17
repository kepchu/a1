import { Component, OnInit } from '@angular/core';
import { ComparatorService } from '../comparator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public message;

  constructor(private comparator: ComparatorService) { }

  ngOnInit() {
    this.comparator.getResults().subscribe(result => this.message = result);
  }

}
