import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterfaceStringsService {

  public comparator = {
    'no text': 'ERROR: no text to compare'
  };

  constructor() { }
}
