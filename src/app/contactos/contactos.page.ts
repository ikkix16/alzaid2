import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ContactosPage implements OnInit {
  users: any[]=[];
  textoBuscar = '';
  

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users =>{

      console.log(users)

      this.users=users;

    });


   

  }
  buscar(event){
    this.textoBuscar=event.detail.value
  }

}