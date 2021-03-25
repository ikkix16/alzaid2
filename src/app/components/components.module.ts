import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [HeaderComponent, 
    MenuComponent,
    PostsComponent,
    PostComponent],
  exports:[HeaderComponent,
    MenuComponent,
    PostComponent,
    PostsComponent,
     RouterModule],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
