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
import { CuadropublicacionComponent } from './cuadropublicacion/cuadropublicacion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  entryComponents:[
    CommentariosComponent
  ],
  declarations: [HeaderComponent, 
    MenuComponent,
    PostsComponent,
    PostComponent,
    CommentariosComponent,
  CuadropublicacionComponent],
  exports:[HeaderComponent,
    MenuComponent,
    PostComponent,
    PostsComponent,
    CommentariosComponent,
     RouterModule,
     CuadropublicacionComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
