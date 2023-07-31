import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../state/product.state";
import {EventDrivenService} from "../../../services/event.driven.service";

@Component({
  selector: 'app-poducts-navbar',
  templateUrl: './poducts-navbar.component.html',
  styleUrls: ['./poducts-navbar.component.css']
})
export class PoductsNavbarComponent implements OnInit {

  //variable pour emettre l'evenement
  //@Output() productEventEmitter:EventEmitter<ActionEvent>= new EventEmitter<any>();//pour envoyer les donnees vers le composant parents
  constructor(private  eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    /*this.productEventEmitter.emit({ //methode de communication entre les composants avec EvenetEmitter
      type:ProductActionsTypes.GET_ALL_PRODUCTS
    });*/
    /*/methode de communication entre les composants avec rxjs Subject*/
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS}) //
  }

  onGetSelectedProducts() {
    /*this.productEventEmitter.emit({
      type:ProductActionsTypes.GET_SELECTED_PRODUCTS
    });*/
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS})
  }

  onGetAvailableProducts() {
   /* this.productEventEmitter.emit({
      type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS
    });*/
    this.eventDrivenService.publishEvent({ type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS})
  }

  onNewProducts() {
   /* this.productEventEmitter.emit({
      type:ProductActionsTypes.POST_NEW_PRODUCTS
    });*/
    this.eventDrivenService.publishEvent({ type:ProductActionsTypes.POST_NEW_PRODUCTS});
  }

  OnSearch(value: any) {
   /* this.productEventEmitter.emit({
      type:ProductActionsTypes.SEARCH_PRODUCTS, payload:value
    });*/
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:value});
  }
}
