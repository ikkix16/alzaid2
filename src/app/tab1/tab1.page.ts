import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MenuOption } from '../interfaces/interfaces';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  options: Observable<MenuOption[]>;
  constructor(private menuCtlr: MenuController, private menu: MenuController) {
    this.menu.enable(true, 'first');
  }


  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtlr.toggle();
  }


}
