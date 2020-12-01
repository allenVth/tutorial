import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http: HttpClient) {

   }

   getPokemon(url:string){
     console.log("hi"+ typeof(this.http.get(url)))
     return this.http.get(url);
     
   }


}
