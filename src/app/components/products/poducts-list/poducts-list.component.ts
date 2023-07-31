import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/product.state";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-poducts-list',
  templateUrl: './poducts-list.component.html',
  styleUrls: ['./poducts-list.component.css']
})
export class PoductsListComponent implements OnInit {

  @Input() public productsInput$:Observable<AppDataState<Product[]>> | null=null;
  //@Output() public  productEventEmitter:EventEmitter<ActionEvent>= new EventEmitter<ActionEvent>();

  public readonly DataStateEnum = DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

 /* onSelect(p: Product) {
    this.productEventEmitter.emit({
      type:ProductActionsTypes.SELECT_PRODUCTS,payload:p
    });
  }

  onDelete(p: Product) {
    this.productEventEmitter.emit({
      type:ProductActionsTypes.DELETE_PRODUCTS, payload:p
    });
  }

  onEdit(p: Product) {
    this.productEventEmitter.emit({
      type:ProductActionsTypes.EDIT_PRODUCTS, payload:p
    });
  }

  onActionEvent($event: ActionEvent) {
    this.productEventEmitter.emit($event);//49732679
  }
  */
}
