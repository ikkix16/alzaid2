import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-commentarios',
  templateUrl: './commentarios.component.html',
  styleUrls: ['./commentarios.component.scss'],
})
export class CommentariosComponent implements OnInit {

  @Input() poost;
  
  constructor(private postsService: PostsService) { }

  ngOnInit() {

    console.log('poost', this.poost);
  }

  comentarPoost(poost){
    this.postsService.comentarPoost(poost._id);
  }

}
