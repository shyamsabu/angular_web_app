import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showDiv = false;
  rotationAngle = 0;

  rotateOnScroll(event: WheelEvent) {
    if (this.showDiv) {
      if (event.deltaY > 0) {
        this.rotationAngle += 10;
      } else {
        this.rotationAngle -= 10;
      }
    }
  }



}
