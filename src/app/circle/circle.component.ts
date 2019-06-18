import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  bColor: String = "#3F8";
  diameter: String = "23";

  setColor(e: Event): void {
    this.bColor = (<HTMLInputElement>e.target).value
    console.log(this.bColor);
  }

  setDiameter(e: Event): void {
    this.diameter = (<HTMLInputElement>e.target).value;
  }

  getDiameter(): String {
    return this.diameter + 'px';
  }


  constructor() { }

  ngOnInit() {
  }

}
