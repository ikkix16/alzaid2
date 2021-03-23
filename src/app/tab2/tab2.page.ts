import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  noticias: Article[]=[]

  constructor(private dataService:DataService) {}

  ngOnInit(){
    this.dataService.getPublicaciones().subscribe(resp=>{
      console.log('noticias', resp)
      
      
    })
  }

}
