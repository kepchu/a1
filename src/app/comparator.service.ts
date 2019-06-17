import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { InterfaceStringsService } from './interface-strings.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparatorService {

  private messages;
  private result:boolean;

  public compare(ignoreWhitespaces: boolean, ignoreCase: boolean, textA: string, textB: string) {

    this.l.log(ignoreWhitespaces + "; " + ignoreCase + "; " + textA + "; " + textB + ". ");

    if ((! textA) || (! textB)) {
      this.l.log(this.messages['no text']);
      return;// this.messages['no text'];
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

    this.result = textA.localeCompare(textB) === 0;
  }

  getResults(): Observable<boolean> {
    return of(this.result);
  }

  private removeWhitespaces(input: string) : string {
    return input.replace(/\s/g,'');
  }

  constructor(private l: LoggerService, private interfaceStringsService: InterfaceStringsService) {
    this.messages = interfaceStringsService.comparator;
    // l.log("constructor: " + this.messages);
  }
}
