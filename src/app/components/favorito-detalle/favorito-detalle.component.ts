import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { PostsService } from 'src/app/services/posts.service';
import {Comment} from 'src/app/interfaces/interfaces'

@Component({
  selector: 'app-favorito-detalle',
  templateUrl: './favorito-detalle.component.html',
  styleUrls: ['./favorito-detalle.component.scss'],
})
export class FavoritoDetalleComponent implements OnInit {
  @Input() favorite;
  comment: Comment[];
  
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.ObtenerComentarios(this.favorite.idpost)
  }

ObtenerComentarios(favorite){
  this.comment = [];
  this.favoriteService.getComment(favorite.idpost)
  .subscribe(resp =>{
    console.log(resp);
    this.comment.push(...resp.comment);
  });
}

}
