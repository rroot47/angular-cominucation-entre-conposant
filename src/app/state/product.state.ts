export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}

export enum ProductActionsTypes{
  GET_ALL_PRODUCTS = "[Products] Get All Products",
  GET_SELECTED_PRODUCTS = "[Products] Get Selected Products",
  GET_AVAILABLE_PRODUCTS = "[Products] Get Available Products",
  SEARCH_PRODUCTS = "[Products] Serach Products",
  POST_NEW_PRODUCTS = "[Products] Post New Products",
  SELECT_PRODUCTS = "[Products] Select Products",
  EDIT_PRODUCTS = "[Products] Edit Products",
  DELETE_PRODUCTS = "[Products] Delete Products"
}

export interface ActionEvent{
  type:ProductActionsTypes,
  payload?:any
}
