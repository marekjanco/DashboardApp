import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openedMenu: boolean = false;

  constructor(){
      this.openedMenu = false;
  }

  openCloseMenu() {
      this.openedMenu = !this.openedMenu;
  }
}
