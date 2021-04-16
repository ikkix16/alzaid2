import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Poost } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';
import { CommentariosComponent } from '../commentarios/commentarios.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() poost: Poost = {};

  constructor(private postsService: PostsService, private navCtrl: NavController,private modalCtrl: ModalController) { }  
  
  ngOnInit() {}

  eliminarPoost(poost){

    this.postsService.eliminarPoost(poost._id);

  }

 async verPoost(poost){

 const modal = await this.modalCtrl.create({
    component: CommentariosComponent,
    componentProps:{
      poost
    }
  })
  modal.present();
 }

 

}
