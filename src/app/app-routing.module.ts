import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'administrador',
    loadChildren: () =>
      import('./pages/administrador/administrador.module').then(
        (m) => m.AdministradorPageModule
      )
  },
  {
    path: 'details-user',
    loadChildren: () =>
      import('./pages/details-user/details-user.module').then(
        (m) => m.DetailsUserPageModule
      )
  },
  {
    path: 'financeiro',
    loadChildren: () =>
      import('./pages/financeiro/financeiro.module').then(
        (m) => m.FinanceiroPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
