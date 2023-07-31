import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../state/product.state";
import {EventDrivenService} from "../../../services/event.driven.service";

@Component({
  selector: 'app-poducts-item',
  templateUrl: './poducts-item.component.html',
  styleUrls: ['./poducts-item.component.css']
})
export class PoductsItemComponent implements OnInit {

  @Input() product!:Product
 // @Output() productEventEmitter:EventEmitter<ActionEvent>= new EventEmitter<ActionEvent>();
  constructor(private  eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
   /* this.productEventEmitter.emit({
      type:ProductActionsTypes.SELECT_PRODUCTS,
      payload:product
    });*/
    this.eventDrivenService.publishEvent({
      type:ProductActionsTypes.SELECT_PRODUCTS,
      payload:product
    })
  }

  onDelete(product: Product) {
   /* this.productEventEmitter.emit({
      type:ProductActionsTypes.DELETE_PRODUCTS,
      payload:product
    });*/
    this.eventDrivenService.publishEvent({
      type:ProductActionsTypes.DELETE_PRODUCTS,
      payload:product
    })
  }

  onEdit(product: Product) {
    /*this.productEventEmitter.emit({
      type:ProductActionsTypes.EDIT_PRODUCTS,
      payload:product
    });*/
    this.eventDrivenService.publishEvent({
      type:ProductActionsTypes.EDIT_PRODUCTS,
      payload:product
    })
  }
}
