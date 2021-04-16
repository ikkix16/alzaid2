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
import {FormsModule} from '@angular/forms'
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComentarComponent } from './comentar/comentar.component';



@NgModule({
  entryComponents:[
    CommentariosComponent
  ],
  declarations: [HeaderComponent, 
    MenuComponent,
    PostsComponent,
    PostComponent,
    ComentarComponent,
    CommentariosComponent,
    ComentariosComponent,
    ComentarioComponent],
  exports:[HeaderComponent,
    MenuComponent,
    PostComponent,
    PostsComponent,
    ComentarComponent,
    CommentariosComponent,
    ComentariosComponent,
    ComentarioComponent,
     RouterModule],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
