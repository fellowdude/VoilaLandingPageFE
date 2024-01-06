import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      return throwError(() => error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  post(routeAPI: string, body: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json");
    return this.http.post(environment.apiURL + routeAPI, body, { headers }).pipe(
      map((response: any)=>{
        if(!response) throw new Error(); 
        if(response.error !== 0) throw new MessageEvent('HandledError', {data: response}); 
        return response;
      }),
      catchError(this.handleError)
    );
  }
}
