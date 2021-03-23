import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MenuOption, RespuestaPublicacion } from 'src/app/interfaces/interfaces';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    
  
    constructor(private http: HttpClient ) { }
  

    getUsers(){
       return this.http.get('https://jsonplaceholder.typicode.com/users'); 
    }

    getMenuOptions(){
      return this.http.get<MenuOption[]>('/assets/data/menu.json');
    }

    getPublicaciones(){
     return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2021-02-20&sortBy=publishedAt&apiKey=7f1d83429c374ebfb22c9783c37d4a51')

    }
  
  
    
  }