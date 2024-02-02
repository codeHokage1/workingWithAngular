import { Component, Input, OnInit } from '@angular/core';
import { CartApiService } from '../../services/cart-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [CartApiService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private cartApi: CartApiService) {}

  @Input() cartItemNum: number = 0;

  getCartItemNum(): number {
    // console.log(this.cartApi.getCartCount());
    return this.cartApi.getCartCount();
  }
}
