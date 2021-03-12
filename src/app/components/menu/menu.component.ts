import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MenuOption } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  options: Observable<MenuOption[]>;

  constructor(private dataService: DataService, private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
   this.options = this.dataService.getMenuOptions();
  }

}
