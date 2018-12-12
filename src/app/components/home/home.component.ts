import { Component, OnInit } from '@angular/core';
import {GifphyService } from '../../services/gifphy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gifphy: [];

  constructor(
    private gifphy_service: GifphyService
  ) {

  }

  ngOnInit() {
    this.gifphy_service.getData().subscribe(
      result => {
        this.gifphy= result.data;
        console.log(this.gifphy);
      }, error => {
        console.log(<any>error.error);
      }
    );
  }

}
