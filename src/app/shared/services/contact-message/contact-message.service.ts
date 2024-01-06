import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {

  constructor(private api: ApiService) { }

  sendMessage(formBody: any): Observable<any> {
    return this.api.post('v1/contact-message', formBody);
  }
}
