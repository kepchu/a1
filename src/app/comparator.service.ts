import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { InterfaceStringsService } from './interface-strings.service';
import { logWarnings } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class ComparatorService {

  // private textA: string="";
  // private textB: string="";

  private _ignoreWhitespaces: boolean = true;
  private _ignoreCase: boolean = false;

  private messages;


  // setTextA(text: string): void {
  //   this.textA = text;
  // }

  // setTextB(text: string): void {
  //   this.textB = text;
  // }

  // ignoreWhitespaces(b:boolean): void {
  //   this._ignoreWhitespaces = b;
  //   this.l.log("ignoreWhitespaces: " + b);
  // }
  // ignoreCase(b:boolean): void {
  //   this._ignoreCase = b;
  //   this.l.log("ignoreCase: " + b);
  // }

  public compare(ignoreWhitespaces: boolean, ignoreCase: boolean, textA: string, textB: string) : any {

    if ((! textA) || (! textB)) {
      this.l.log(this.messages['no text']);
      return this.messages['no text'];
    }

    if (ignoreWhitespaces) {
      textA = this.removeWhitespaces(textA);
      textB = this.removeWhitespaces(textB);
    }

    if (ignoreCase) {
      textA = textA.toLowerCase();
      textB = textB.toLowerCase();
    }

    this.l.log("COMPARING:");
    this.l.log(textA);
    this.l.log(textB);

    return textA.localeCompare(textB) === 0;
  }

  private removeWhitespaces(input: string) : string {
    return input.replace(/\s/g,'');
  }

  constructor(private l: LoggerService, private interfaceStringsService: InterfaceStringsService) {
    this.messages = interfaceStringsService.comparator;
    // l.log("constructor: " + this.messages);
  }
}
