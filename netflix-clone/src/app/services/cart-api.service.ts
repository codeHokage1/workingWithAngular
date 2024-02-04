import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products/1');
  }
}
