import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'brochure',
    loadChildren: () => import('./pages/brochure/brochure.module').then(m => m.BrochureModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
