import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { jsDocComment } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  myarr: any = [];
  loader: any = false;
  cartarr: any = [];



  constructor(private service: ProductService) {

  }

  ngOnInit() {
    this.loader = true;
    this.service.fetchMyData((callback: any) => {
      this.myarr = callback;
      console.log(callback);
      this.loader = false;
    })
    let localCart: any = localStorage.getItem("cartData");
    if (localCart) {
      this.cartarr = JSON.parse(localCart)
    }
  }


  addtoCart(item: any) {


    if (this.cartarr.length == 0) {
      item.quantity = 1;
      this.cartarr.push(item);
    } else {

      let isExist = this.cartarr.some((e: any) => e.id == item.id);

      if (!isExist) {
        item.quantity = 1;
        this.cartarr.push(item);

      } else {
        for (const element of this.cartarr) {
          if (element.id == item.id) {
            element.quantity = element.quantity + 1;
            localStorage.setItem("cartData", JSON.stringify(this.cartarr));
          }
        }
      }
    }

    localStorage.setItem("cartData", JSON.stringify(this.cartarr));
    console.log(this.cartarr);

  }




  // get() {
  //   this.service.fetchMyData((callback: any) => {
  //     this.myarr = callback;
  //     console.log(callback);

  //   })


}
