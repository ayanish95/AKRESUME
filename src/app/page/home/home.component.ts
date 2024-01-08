/**
 * Core
 */
import { Component, OnInit } from '@angular/core';

/**
 * Services
 */
import { ContentLoaderService } from './../../core/service/content-loader.service';

/**
 * ? Library
 */
import Typed from 'typed.js'
import { Content } from 'src/app/core/model/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //public homeContent: Content;

  constructor(private _contentLoaderService: ContentLoaderService) { 
  
  //  debugger
  //  this._contentLoaderService.loadContent()
  //                  .subscribe( res =>{
  //                   console.log("data",res);
  //                 });   
  }

  ngOnInit(): void {
    var options = {
      strings: ['','Angular','Dot Net Core','C#'],
      typeSpeed:120,
      backspeed:100,
      loop: true
    };

    var typed = new Typed('.typed',options);
    typed.reset(true)
  }

}
