import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  localarr: any = [];
  parsedataarr: any = [];
  sum: any = 0;

  ngOnInit() {
    this.localarr = localStorage.getItem("cartData");
    this.parsedataarr = JSON.parse(this.localarr);
    for (let i = 0; i < this.parsedataarr.length; i++) {
      this.sum = this.sum + (this.parsedataarr[i].price * this.parsedataarr[i].quantity);

    }
    console.log(this.sum);
  }


}
