import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
cartQuantity= 0;
constructor(private cartService :CartService){
  cartService.getCartObservable().subscribe((cart)=>{
    this.cartQuantity = cart.totalCount
  })
}
}
