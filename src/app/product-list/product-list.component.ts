import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(clickedProduct: Product) {
    window.alert('The product ' + clickedProduct.name + ' has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  onNotify2() {
    window.alert('You will be notified when the product is sold out');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/