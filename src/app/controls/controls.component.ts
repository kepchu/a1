import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ComparatorService } from '../comparator.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  ignoreWhitespaces: boolean = false;
  ignoreCase: boolean = false;
  copyingMode: boolean = false;


  result="no result yet";

  textA = `ignore whitespaces
  ignore case
  copying mode
  
  `
  textB = `ignore whitespaces
  ignore case
  copying mode
  
  `

  optionChange(optionId: string, status: boolean) {

    switch (optionId) {
      case "optIgnoreWhitespaces":
        this.ignoreWhitespaces = status;
        break;
      case "optIgnoreCase":
        this.ignoreCase = status;
        break;
      case "optCopyingMode":
        this.copyingMode = status;
        break;
    }

    this.l.log(optionId + ": " + status);
  }


  compare() {
    console.log("calling comparator");
    // TODO: make result component that listens to comparator
    this.result = this.comparator.compare(this.ignoreWhitespaces, this.ignoreCase, this.textA, this.textB);

    this.l.log("COMPARED: " + this.result);
  }

  constructor(private l: LoggerService, private comparator: ComparatorService) { }

  ngOnInit() { }

}
