import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../state/product.state";
import {Product} from "../../model/product.model";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {EventDrivenService} from "../../services/event.driven.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //products: Product[] | any;
  public products$:Observable<AppDataState<Product[]>> | null=null;
  //public readonly dataStateEnum:DataStateEnum;
  public readonly DataStateEnum = DataStateEnum;

  constructor(private productsService:ProductsService,
              private router:Router,
              private  eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
      this.onActionEvent(actionEvent);
    })
  }

  onGetAllProducts() {
    this.products$=this.productsService.getAllProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetSelectedProducts() {
    this.products$=this.productsService.getSeletecdProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetAvailableProducts() {
    this.products$=this.productsService.getAvailableProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  OnSearch(dataForm: any) {
    this.products$=this.productsService.getSearchProducts(dataForm.keyword).pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSelect(p: Product) {
    this.productsService.selectProducts(p).subscribe(data=>{
     p.selected = data.selected;
    })
  }

  onDelete(p: Product) {
    let v = confirm("Are you sure to delete?");
    if(v)
    this.productsService.deleteProduct(p).subscribe(data=>{
      this.onGetAllProducts();
    })
  }

  onNewProducts() {
    this.router.navigateByUrl('/newProduct')
  }

  onEdit(p: Product) {
    this.router.navigateByUrl('/editProduct/'+p.id);
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionsTypes.GET_ALL_PRODUCTS:this.onGetAllProducts(); break;
      case ProductActionsTypes.GET_SELECTED_PRODUCTS:this.onGetSelectedProducts();break;
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:this.onGetAvailableProducts();break;
      case ProductActionsTypes.SEARCH_PRODUCTS:this.OnSearch($event.payload); break;
      case ProductActionsTypes.POST_NEW_PRODUCTS:this.onNewProducts();break;
      case ProductActionsTypes.SELECT_PRODUCTS:this.onSelect($event.payload); break;
      case ProductActionsTypes.DELETE_PRODUCTS:this.onDelete($event.payload);break;
      case ProductActionsTypes.EDIT_PRODUCTS:this.onEdit($event.payload); break;
    }
  }
}
