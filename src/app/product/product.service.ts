import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable, Subject, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // apiUrl = "http://localhost:3000"

  cartCountCommon: number = 0;

  cartCount$ = new BehaviorSubject<number>(0);

  increment(){
    this.cartCountCommon++; 
    //++ operator is used to increment the value of the variable by one
    this.cartCount$.next(this.cartCountCommon);
  }  

  /*
  For HTTP Request,
  C - post method
  R - get method
  U - put method
  D - delete method
  */

  //Read All
  //get method of the HttpClient
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
                    .pipe(catchError((error: HttpErrorResponse) => {
                      //this throwError will send the error notification to the 
                      //subsciber
                      return throwError("Error occured while fetching the data");
                    }));
  }

  //get method for retreiving single product
  getProductById(id: number):Observable<Product>{
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  //extra setting for specifying that we are sending the json data
  //in the request
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  //create new product in the backend
  insertProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${environment.apiUrl}/products`, 
                                    JSON.stringify(product),
                                    this.httpOptions
    )
  }

  //delete the product based on the id passed
  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`);
  }

  //update the product based on the id and data submitted
  updateProduct(id: number, product: Product):Observable<Product>{
    return this.http.put<Product>(`${environment.apiUrl}/products/${id}`, 
                                  JSON.stringify(product),
                                  this.httpOptions)
  }
}
