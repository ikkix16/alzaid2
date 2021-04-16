import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.scss'],
})
export class ComentarComponent implements OnInit {
  
  @Input() poost;

  constructor(private postsService : PostsService) { }

  ngOnInit() {}

  comment={
    description:''
  }

  comentarPoost(poost){

    this.postsService.comentarPoost(poost._id,this.comment);

  }

}
