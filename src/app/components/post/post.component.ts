import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Post } from 'src/app/interfaces/interfaces';
import { FavoriteService } from 'src/app/services/favorite.service';
import { PostsService } from 'src/app/services/posts.service';
import { CommentariosComponent } from '../commentarios/commentarios.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};

  constructor(private favoriteService: FavoriteService, private navCtrl: NavController,private modalCtrl: ModalController, private postsService: PostsService) { }

  
  
  ngOnInit() {}

  eliminarPost(post){

    this.postsService.eliminarPost(post._id);

  }

 async verPost(post){

 const modal = await this.modalCtrl.create({
    component: CommentariosComponent,
    componentProps:{
      post
    }
  })
  modal.present();
 }


 favoritoPost(post){

  this.favoriteService.favoritePost(this.post)
  console.log(post)

 }
 

}
