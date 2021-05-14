import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.scss'],
})
export class ComentarComponent implements OnInit {
  
  @Input() post;

  constructor(private postsService : PostsService) { }

  ngOnInit() {}

  comment={
    description:''
  }

  comentarPost(post){

    this.postsService.comentarPost(post._id,this.comment);

  }

}
