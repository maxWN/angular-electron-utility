import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from 'selenium-webdriver/http';
import { Http, Response } from '@angular/http';

@Injectable()
export class FileHandlerService {

  private http: Http;

  constructor(http: HttpClient) { }

  // public downloadTextFile() {
  //   let options = {responseType: ResponseContentType.ArrayBuffer };
  //   return this.http.get(this.config.apiUrl + '/blablasCSV', options)
  //   .catch((err: Response) => Observable.throw(err.json()));
  // }

}
