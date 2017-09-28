import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id:string;

  constructor(private activatedRoute :ActivatedRoute) {

  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;

  }

}
