import { Component, OnInit, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ModalData, ModalSupportService } from '../../';
import { EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'desk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('popupState', [
      state('block', style({
        transform: 'scale(1)'
      })),
      state('none', style({
        transform: 'scale(0)'
      })),
      transition('block => none', animate('1000ms ease-out')),
      transition('none => block', animate('1000ms ease-in'))
    ])
  ]
})

export class ModalComponent implements OnInit {

  // region class variables

    // Get the modal
    public modal = document.getElementById('myModal');
    // Get the button that opens the modal
    public btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    public span = document.getElementsByClassName("close")[0];
    // Get the state of the modal
    @Input() activeState: boolean = false;
    // Get user supplied data
    @Input() userData?: ModalData;
    public displayVal: string = "none";
    @Output() eventClick: EventEmitter<any> = new EventEmitter();

  // endregion class variables

  constructor(private _electronService: ElectronService) { }

  // region public functions

    public ngOnInit(): void {
    }

    public yesBtn(): void {
      this._electronService.ipcRenderer.send('yesOption');
    }

    public noBtn(): void {
      this._electronService.ipcRenderer.send('noOption');
    }

    public get initialState() {
      return this.activeState ? 'block' : 'none';
    }

    public spanOnclick(): void {
      setTimeout(() => {
      this.activeState = false;
      this.eventClick.emit(this.activeState);
      }, 1000);
    }

  // endregion public functions

}
