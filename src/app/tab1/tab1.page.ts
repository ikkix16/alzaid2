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

  constructor(private postsService: PostsService) {}

  ngOnInit(){
    
    this.postsService.getPoost()
    .subscribe(resp =>{
      console.log(resp);
      this.poost.push(...resp.poost);
    });



  }

}
