import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';
import { PostsService } from '../services/posts.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  constructor(private http: HttpClient, private postsService: PostsService, ) {}

  poost= {
    title: 'Joel',
    description: 'Luna',
  };

  ngOnInit(){

  }

  crearPoost(){

    this.postsService.crearPoost(this.poost);
    
  }

}
