import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
   },
  // {

  //   path: 'profile',
  //   loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  {
     path: 'service-detail',
     loadChildren: () => import('./pages/service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
   },
  //  {
  //   path: 'services',
  //    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  //  },
  // {

  //   path: 'chatroom',
  //   loadChildren: () => import('./chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  // }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
