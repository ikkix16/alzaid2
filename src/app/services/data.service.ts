import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MenuOption } from 'src/app/interfaces/interfaces';

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
  
  
    
  }