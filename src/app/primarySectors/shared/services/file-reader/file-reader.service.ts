import { Injectable } from '@angular/core';
import { IFileSourceReader } from './file-reader';

@Injectable()
export class FileReaderService implements IFileSourceReader{

  private filePath:any;

  constructor() { }

  public readFilePath(path: any) {    
    if(path) {
      this.filePath = path;
    }
    else {
      console.log("FileReaderService class function readFilePath() failed to receive valid results");
    }
  }

  public getFilePath():any {
    let retVal:any;
    
    if(this.filePath) {
      retVal=this.filePath;
    }
    else {
      console.log("FileReaderService class function getFilePath() failed to receive valid results");
    }

    return retVal;
  }

}
