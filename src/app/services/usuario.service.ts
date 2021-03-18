import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null; 
    constructor(private http: HttpClient,
                private storage: Storage){
    }


    login(email: string, password: string){
      return new Promise(resolve =>{

        const data = {email,password};

        this.http.post(`${URL}/user/login`, data)
        .subscribe(resp =>{
            console.log(resp);
            if(resp['ok']){
              this.guardarToken(resp['token']);
              resolve(true);
            }else{
              this.token =null;
              this.storage.clear();
              resolve(false);
            }
        });
      });

        
    }

    register(email:string,password:string,nombre:string){
      const data ={email,password,nombre};

      this.http.post(`${URL}/user/create`,data)
      .subscribe(resp =>{
        console.log(resp);
      });
    }

    async guardarToken(token: string){
      this.token= token;
      await this.storage.set('token', token);
    }
  }

