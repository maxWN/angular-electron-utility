import { Injectable } from '@angular/core';

@Injectable()
export class ModalSupportService {

  private _userChoice : boolean;

  constructor() { }
  
  public get userChoice() : boolean {
    return this.userChoice;
  }
  public set userChoice(option : boolean) {
    this.userChoice = option;
  }
  
}
