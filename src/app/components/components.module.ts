import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';



@NgModule({
  declarations: [HeaderComponent, MenuComponent,TabsPage],
  exports:[HeaderComponent, MenuComponent,TabsPage,RouterModule],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
    
  ]
})
export class ComponentsModule { }
