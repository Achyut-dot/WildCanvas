import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatSnackBarModule,
    FlexLayoutModule
  ]
})
export class CartModule { }