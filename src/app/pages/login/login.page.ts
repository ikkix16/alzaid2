import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'
import { UsuarioService } from 'src/app/services/usuario.service';
import {Storage} from '@ionic/storage-angular'
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'marioxbarreras@gmail.com',
    password: '123456'
  }

  registerUser={
    email: '',
    password:'',
    nombre:''
  }
  
  constructor(private usuarioService: UsuarioService,
              private navTabs: NavController) { }

  ngOnInit() {
  }

  async login(fLogin: NgForm) {
    if(fLogin.invalid){
      return;
    }
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if(valido){
      this.navTabs.navigateRoot('/tabs/tab1')
    }else{

    }


  }

  register(fRegister: NgForm){
    if(fRegister.invalid){
      return;
    }
    this.usuarioService.register(this.registerUser.email,this.registerUser.password, this.registerUser.nombre);
  }
 


}
/**
 * loginGoogle(){
    this.auth.loginGoogle().then().then(res=>{
      this.router.navigate(['/inicio']);

    }).catch(err=> alert('Chingadamadre'))


  }
 *
 */




