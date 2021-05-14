import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { PerfilUsuarioComponent } from '../components/perfil-usuario/perfil-usuario.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

   @Input()usuario
  usuarios: any[] = [];
  textoBuscar = '';
  constructor(private modalCtrl: ModalController,private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(usuarios => {

      console.log(usuarios)

      this.usuarios = usuarios;

    });





  }

 async verUsuarioPerfil(usuario){
    const modal = await this.modalCtrl.create({
      component: PerfilUsuarioComponent,
      componentProps:{
        usuario
      }
    })
    modal.present();
   }


  
  buscar(event) {
    this.textoBuscar = event.detail.value
  }

}
