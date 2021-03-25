import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaPoosts } from '../interfaces/interfaces';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost = 0;

  constructor(private http: HttpClient) { }


  getPoost(){

    this.paginaPost ++;

    return this.http.get<RespuestaPoosts>(`${URL}/poost/?pagina=${this.paginaPost}`)
  }



}
