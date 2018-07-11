import { Injectable } from '@angular/core';

@Injectable()
export class ModalSupportService {

  private _value : boolean;

  constructor() { }
  
  public get value() : boolean {
    return this._value;
  }
  public set value(v : boolean) {
    this._value = v;
  }
  
}
