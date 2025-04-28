import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(() => {
      this.cartItems = [];
      this.totalPrice = 0;
      this.snackBar.open('Cart cleared successfully', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    });
  }

  removeItem(item: Product): void {
    // You'll need to implement this method in your cart service
    // This is a placeholder for demonstration
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.totalPrice = this.getTotalPrice();
      this.snackBar.open(`${item.name} removed from cart`, 'Close', {
        duration: 3000
      });
    }
  }

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe(() => {
      this.cartItems = [];
      this.totalPrice = 0;
      this.snackBar.open('Checkout successful! Thank you for your purchase.', 'Close', {
        duration: 5000,
        panelClass: ['success-snackbar']
      });
    });
  }
}