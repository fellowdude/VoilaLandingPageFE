import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrochureEspComponent } from './brochure-esp/brochure-esp.component';
import { BrochureEngComponent } from './brochure-eng/brochure-eng.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'esp'},
  { path: 'esp', component: BrochureEspComponent },
  { path: 'eng', component: BrochureEngComponent },
]

@NgModule({
  declarations: [
    BrochureEspComponent,
    BrochureEngComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BrochureModule { }
