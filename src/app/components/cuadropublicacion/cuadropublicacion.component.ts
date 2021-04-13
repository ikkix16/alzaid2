import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-cuadropublicacion',
  templateUrl: './cuadropublicacion.component.html',
  styleUrls: ['./cuadropublicacion.component.scss'],
})
export class CuadropublicacionComponent implements OnInit {

  constructor(private http: HttpClient, private postsService: PostsService,) { }
  poost= {
    title: '',
    description: '',
  };

  ngOnInit(){

  }

  crearPoost(){

    this.postsService.crearPoost(this.poost);
    this.poost.title='';
    this.poost.description='';
    
  }

}

