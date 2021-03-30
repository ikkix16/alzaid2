import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Poost } from '../interfaces/interfaces';
import { PostsService } from '../services/posts.service';
import { MenuOption } from '../interfaces/interfaces';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  poost: Poost[] = [];

  scrollActived = true;

  constructor(private postsService: PostsService) {}

  ngOnInit(){

    this.siguientes();
    
  }

  siguientes(event?, pull: boolean = false){

    if(pull){
      this.scrollActived =true;
      this.poost = [];
    }
    this.postsService.getPoost(pull)
    .subscribe(resp =>{
      console.log(resp);
      this.poost.push(...resp.poost);

      if(event){
        event.target.complete();
        if(resp.poost.length === 0){
            this.scrollActived =false;
         }
      }
    });
  }

  recargar(event){
    this.siguientes(event,true);
  }

}
