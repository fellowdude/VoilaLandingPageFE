import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsComponent } from './components/socials/socials.component';
import { ContactUsComponent } from './modals/contact-us/contact-us.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialsComponent,
    ContactUsComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialsComponent,
    ContactUsComponent
  ]
})
export class SharedModule { }
