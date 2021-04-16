import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes



@NgModule({
<<<<<<< Updated upstream
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
    
=======
  entryComponents:[
  ],
  declarations: [HeaderComponent, 
    MenuComponent,
    PostsComponent,
    PostComponent,
    CommentariosComponent,
    ComentariosComponent,
    ComentarComponent,
    ComentarioComponent],
  exports:[HeaderComponent,
    MenuComponent,
    PostComponent,
    PostsComponent,
    CommentariosComponent,
    ComentariosComponent,
    ComentarioComponent,
    ComentarComponent,
     RouterModule],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
>>>>>>> Stashed changes
  ]
})
export class ComponentsModule { }
