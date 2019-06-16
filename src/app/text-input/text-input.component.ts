import { Component, OnInit } from '@angular/core';
import { ComparatorService } from '../comparator.service'
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})

export class TextInputComponent implements OnInit {

  updateText(id: string, text: string){
    if (id === "textA") {
      this.comparator.setTextA(text);
    } else {
      this.comparator.setTextB(text);
    }
    
    this.l.log(id + ': ' + text);
  }


  constructor(private l: LoggerService, private comparator: ComparatorService) { }

  ngOnInit() {
  }

}
