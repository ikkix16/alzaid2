import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CommentariosComponent } from '../components/commentarios/commentarios.component';
import { Poost, RespuestaPoosts, RespuestaComment} from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost = 0;

  constructor(private http: HttpClient, private usuarioService: UsuarioService, private navCtrl: NavController) { }


  getPoost(pull: boolean = false){

    if(pull){
      this.paginaPost = 0;
    }

    this.paginaPost ++;

    return this.http.get<RespuestaPoosts>(`${URL}/poost/?pagina=${this.paginaPost}`)
  }

  getComment(id,pull: boolean = false){

    if(pull){
      this.paginaPost = 0;
    }

    this.paginaPost ++;
    
    return this.http.get<RespuestaComment>(`${URL}/poost/comments/` +id)
  }

  crearPoost(poost){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
  
   this.http.post(`${URL}/poost/poosts`, poost, {headers})
   .subscribe(resp =>{
      console.log(resp);
  });
  }


  eliminarPoost(id){

    this.http.delete(`${URL}/poost/delete/` +id)
    .subscribe(resp=>{
      console.log(resp)
    })

  }

  comentarPoost(id,comment){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

   this.http.post(`${URL}/poost/comment/`  +id,comment)
    .subscribe(resp=>{
      console.log(resp)
    });
  }
}

