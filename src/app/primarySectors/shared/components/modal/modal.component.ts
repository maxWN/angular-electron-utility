import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // Get the modal
  public modal = document.getElementById('myModal');
  // Get the button that opens the modal
  public btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  public span = document.getElementsByClassName("close")[0];

  constructor() { }

  // region public functions

  public ngOnInit(): void {
  }

  public btnOnclick() {
    this.modal.style.display = "block";
  }

  public spanOnclick() {
    this.modal.style.display = "none";
  }

  public windowOnclick(event) {
      if (event.target == this.modal) {
          this.modal.style.display = "none";
      }
  } 

  // endregion public functions

}
