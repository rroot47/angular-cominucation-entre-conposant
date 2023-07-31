import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { PoductsNavbarComponent } from './components/products/poducts-navbar/poducts-navbar.component';
import { PoductsListComponent } from './components/products/poducts-list/poducts-list.component';
import { PoductsItemComponent } from './components/products/poducts-item/poducts-item.component';


const routes : Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'newProduct', component: NewProductComponent},
  {path: 'editProduct/:id', component: EditProductComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    PoductsNavbarComponent,
    PoductsListComponent,
    PoductsItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
