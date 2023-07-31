import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId!:number;
  productFormGroup!:FormGroup
  submitted:boolean=false;

  constructor(private activetedRoute:ActivatedRoute, private productService:ProductsService, private fb:FormBuilder) {
    this.productId = this.activetedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(data=>{
     this.productFormGroup= this.fb.group({
        id:[data.id, Validators.required],
        name:[data.name, Validators.required],
        price:[data.price, Validators.required],
        quantity:[data.quantity, Validators.required],
        selected:[data.selected, Validators.required],
        available:[data.available, Validators.required]
      });
    })
  }

  onUpadteProduct() {
    this.productService.editProduct(this.productFormGroup.value).subscribe(data=>{
      alert('edit success!!')
    })
  }
}
