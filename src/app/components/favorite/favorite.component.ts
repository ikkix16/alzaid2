import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Favorite } from 'src/app/interfaces/interfaces';
import { FavoritoDetalleComponent } from '../favorito-detalle/favorito-detalle.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  @Input() favorite: Favorite = {}


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verFavorite(favorite){

    const modal = await this.modalCtrl.create({
       component: FavoritoDetalleComponent,
       componentProps:{
        favorite
       }
     })
     modal.present();
    }

}
