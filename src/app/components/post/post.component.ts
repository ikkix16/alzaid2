import { Component, Input, OnInit } from '@angular/core';
import { Poost } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() poost: Poost = {};

  constructor(private postsService: PostsService) { }

  
  
  ngOnInit() {}

  eliminarPoost(){
    this.postsService.eliminarPoost(this.poost._id);

  }

}
