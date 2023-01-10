import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
})
export class SlidesComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 900
  };
  constructor() { }

  
  ngOnInit() {
    
  }

}
