import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
<<<<<<< Updated upstream
=======
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
      this.poost.push(...resp.poost);

      if(event){
        event.target.complete();
        if(resp.poost.length === 0){
            this.scrollActived =false;
         }
      }
    });
  }
>>>>>>> Stashed changes

  constructor() {}

}
