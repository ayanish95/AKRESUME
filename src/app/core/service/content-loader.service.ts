import { Injectable } from '@angular/core';
import { Content } from '../model/content';
import { webcontent } from '../shared/webcontent';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {

  private content = new Subject<any>();

  /**
   * ? Load Dynamic Content
   * 
   *  Constructor
   * 
   * @param _contentService 
   */

  constructor() { }

  // loadContent():Observable<any>{ 
  //       return webcontent;
  // }
}
