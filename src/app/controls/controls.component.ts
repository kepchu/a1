import { Component, OnInit, Input } from '@angular/core';
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

  @Input() textA:string;
  @Input() textB:string;

  // textA = `ignore whitespaces
  // ignore case
  // copying mode
  
  // `
  // textB = `ignore whitespaces
  // ignore case
  // copying mode
  
  // `

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
    this.comparator.compare(this.ignoreWhitespaces, this.ignoreCase, this.textA, this.textB);
  }

  constructor(private l: LoggerService, private comparator: ComparatorService) { }

  ngOnInit() { }

}
