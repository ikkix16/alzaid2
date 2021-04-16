import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';
import {Comment} from 'src/app/interfaces/interfaces'
import { ComentarComponent } from '../comentar/comentar.component';

@Component({
  selector: 'app-commentarios',
  templateUrl: './commentarios.component.html',
  styleUrls: ['./commentarios.component.scss'],
})
export class CommentariosComponent implements OnInit {
  @Input() poost;
  comment: Comment[];

  constructor(private postsService: PostsService,private modalCtrl: ModalController) { }


  ngOnInit() {
    this.ObtenerComentarios(this.poost);
  }

  async verPoost(poost){

    const modal = await this.modalCtrl.create({
       component: ComentarComponent,
       componentProps:{
         poost
       }
     })
     modal.present();
    }

  ObtenerComentarios(poost){
    this.comment = [];
    this.postsService.getComment(poost._id)
    .subscribe(resp =>{
      console.log(resp);
      this.comment.push(...resp.comment);
    });
  }


}
