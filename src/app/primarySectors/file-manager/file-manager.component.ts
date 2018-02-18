import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desk-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * @private 
   * @param dirs {str array} - represents array of dir names
   */
  public loadFolderTree(): void {
    //load directory structure 
  }



}
