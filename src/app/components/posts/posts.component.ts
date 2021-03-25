import { Component, Input, OnInit } from '@angular/core';
import { Poost } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() public poost: Poost[] = [];
  
  constructor() { }

  ngOnInit() {

    console.log(this.poost);
  }

}
