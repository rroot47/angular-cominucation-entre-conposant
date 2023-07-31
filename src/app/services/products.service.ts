import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {BASE_URL} from "../constants/base-url.constant";
import {environment} from "../../environments/environment";

@Injectable({providedIn:"root"})
export class ProductsService{

  constructor(private http:HttpClient) {
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+"/products")
  }
  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(environment.host+"/products/"+id)
  }

  editProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(environment.host+"/products/"+product.id, product)
  }

  getSeletecdProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+"/products?selected=true")
  }

  getAvailableProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+"/products?available=true")
  }

  getSearchProducts(keyword: string):Observable<Product[]> {
    return this.http.get<Product[]>(environment.host+"/products?name_like="+keyword)
  }

  selectProducts(product: Product):Observable<Product> {
    product.selected=!product.selected
    return this.http.put<Product>(environment.host+"/products/"+product.id, product)
  }

  deleteProduct(product: Product):Observable<void> {
    product.selected=!product.selected
    return this.http.delete<void>(environment.host+"/products/"+product.id)
  }

  save(product: Product):Observable<Product> {
    return this.http.post<Product>(environment.host+"/products", product)
  }
}
