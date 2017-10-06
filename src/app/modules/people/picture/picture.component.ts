import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() imgSrc;

  @Output() countEvent:EventEmitter<number> = new EventEmitter();

  count: number = 0;

  defaultImgSrc : string = 'assets/img/profile.ico';

  constructor() { }

  ngOnInit() {
    console.log(this.imgSrc)
  }

  incrementCount(){
    this.count++;
    this.countEvent.emit(this.count);
  }

}
