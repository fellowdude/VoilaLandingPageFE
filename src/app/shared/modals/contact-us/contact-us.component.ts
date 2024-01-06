import { Component, OnInit } from '@angular/core';
import { ContactUsService } from './contact-us.service';
import { Observable } from 'rxjs';
import { ContactMessageService } from '../../services/contact-message/contact-message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  flip: boolean = false;
  display$!: Observable<boolean>;
  sentMessage: boolean = false;
  loading: boolean = false;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required])
  })

  constructor(
    private contactUsModalService: ContactUsService,
    private contactMessageService: ContactMessageService
  ) {}

  ngOnInit(): void {
    this.display$ = this.contactUsModalService.watch();
    this.flip = false;
  }

  flipCard(): void {
    this.flip = !this.flip;
  }
  
  send(): void {
    if(this.contactForm.valid){
      this.loading = true;
      this.contactMessageService.sendMessage(this.contactForm.value).subscribe({
        next: (response) =>{
          console.log('SENT');
          this.sentMessage = true;
          this.loading = false;
          setTimeout(()=>{
            this.sentMessage = false;
          }, 2000)
          this.contactForm.reset();
        },
        error: (err) =>{
          this.loading = false;
          console.log('NOT SENT');
        }
      })
    }
  }

  close() {
    this.flipCard();
    
    setTimeout(()=> {
      this.contactUsModalService.close(); 
      this.flip = false;
    }, 300);
  }
}
