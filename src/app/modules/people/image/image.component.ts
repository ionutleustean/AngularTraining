import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() a;

  @Output() b = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.b.emit("test b")
  }

}
