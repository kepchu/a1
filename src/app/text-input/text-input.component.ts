import { Component, OnInit } from '@angular/core';
import { ComparatorService } from '../comparator.service'
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})

export class TextInputComponent implements OnInit {

  contentOfTextA: string = "";
  contentOfTextB: string = "";

  storeTexts(textA:string, textB:string){
    this.contentOfTextA = textA;
    this.contentOfTextB = textB;
  }

  display(input:any) {
    console.log(input);
  }

  // textA:string;
  // textB:string;

  // updateText(id: string, text: string){
  //   if (id === "textA") {
  //     this.textA = text;
  //   } else {
  //     this.textB = text;
  //   }
    
  //   this.l.log(id + ': ' + text);
  // }


  constructor(private l: LoggerService, private comparator: ComparatorService) { }

  ngOnInit() {
  }

}
