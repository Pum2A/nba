import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {


  isClicked = false;

  isClickedMenu() {
    this.isClicked = !this.isClicked;
    console.log('click');
  }
}
