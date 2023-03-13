import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product} from '../../models/product.model'

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([])
originalData: Product[] = [];

  connect(): Observable<Product[]>{
    return this.data

  }

  init(products: Product[]){
    this.originalData = products;
this.data.next(products);
  }

  getTotal(){
    const products = this.data.getValue();
    return products.map(item => item.price).reduce((price, total) => price + total, 0)
  }

  update(id: Product['id'], changes: Partial<Product>){
const products = this.data.getValue();
const productIndex = products.findIndex( item => item.id === id);
if(productIndex !== -1){
  products[productIndex] = {
    ...products[productIndex],
    ...changes,
  }
  this.data.next(products);

}
  }

//Solo busca titulos
/*   find(query: string){

    const newProducts = this.originalData.filter(item =>
      item.title.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase()));
      this.data.next(newProducts);

  } */

  //Busca todo, titulos, precios, id

  /*   find(query: string) {
    const newProducts = this.originalData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
      || item.id == query
      || item.price === Number(query)
      )
    this.data.next(newProducts);
  }
 */


  find(query: string) {
    const newProducts = this.originalData
    .filter(item => {
      const word = `${item.id}-${item.title}-${item.price}`;
      return word.toLowerCase().includes(query.toLowerCase())
    });
    this.data.next(newProducts);
  }
  disconnect() {

  }


}
