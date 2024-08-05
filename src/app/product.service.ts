import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  service: any;

  constructor(private http: HttpClient) { }


  fetchMyData(callback: any) {

    let url = "https://fakestoreapi.com/products";
    return this.http.get(url).subscribe((data: any) => callback(data));

  }




}
