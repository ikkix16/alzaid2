import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';


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
              private navTabs: NavController, private uiService: UiServiceService) { }

  ngOnInit() {
  }

  registrar2(){
    this.navTabs.navigateRoot('register')

  }

  async login(fLogin: NgForm) {
    if(fLogin.invalid){
      return;
    }
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if(valido){
      this.navTabs.navigateRoot('/tabs/tab1')
    }else{
      this.uiService.alertMenssage('Usuario/contrasenia no son correctas'); 
    }


  }

  async register(fRegister: NgForm){
    if(fRegister.invalid){
      return;
    }
   const valido = await this.usuarioService.register(this.registerUser);

   if(valido){
      this.navTabs.navigateRoot('/tabs/tab1')
    }
    else{
      this.uiService.alertMenssage('El correo ya existe'); 
    }
  }
}

