import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'avam-window-chrome',
  templateUrl: './avam-window-chrome.component.html',
  styleUrls: ['./avam-window-chrome.component.scss']
})
export class AvamWindowChromeComponent implements OnInit {
  @Output() close = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
