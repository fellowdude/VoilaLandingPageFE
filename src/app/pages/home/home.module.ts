import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurMagicComponent } from './our-magic/our-magic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurMagicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
