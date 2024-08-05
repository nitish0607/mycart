import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  myarr: any = [];
  loader: any = false;

  constructor(private service: ProductService) {

  }

  ngOnInit() {
    this.loader = true;
    this.service.fetchMyData((callback: any) => {
      this.myarr = callback;
      console.log(callback);
      this.loader = false;
    })

  }

  // get() {
  //   this.service.fetchMyData((callback: any) => {
  //     this.myarr = callback;
  //     console.log(callback);

  //   })


}
