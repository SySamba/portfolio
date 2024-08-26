import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  cartItems = [
    { name: 'Article 1', quantity: 1, price: 10, image: 'assets/image/riz1.png' },
    { name: 'Article 2', quantity: 2, price: 15, image: 'assets/image/riz1.png' },
    // Ajoutez d'autres articles ici
  ];
  constructor() {}

  removeFromCart(item:any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  getTotal() {
    return this.cartItems.reduce((i, j) => i + j.price * j.quantity, 0);
  }

  checkout() {
    // Logique de paiement
    console.log('Proceed to checkout');
  }

}
