import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { CommentariosComponent } from './commentarios/commentarios.component';



@NgModule({
  entryComponents:[
    CommentariosComponent
  ],
  declarations: [HeaderComponent, 
    MenuComponent,
    PostsComponent,
    PostComponent,
    CommentariosComponent],
  exports:[HeaderComponent,
    MenuComponent,
    PostComponent,
    PostsComponent,
    CommentariosComponent,
     RouterModule],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
