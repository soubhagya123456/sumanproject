import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elec',
  templateUrl: './elec.component.html',
  styleUrls: ['./elec.component.css']
})
export class ElecComponent implements OnInit {
   
  boughtProducts: Array<any> = [];

  products: Array<any> = [{ name: 'watch', price: 700, imageUrl: 'assets/p1.jpg', height:70, productOffer: 'No Cost EMI Card value above ₹1449'},
 
  { name: 'Mobile', price: 180, imageUrl: 'assets/p4.jpg', height:10, productOffer: 'No Cost EMI Card value above ₹1449' },
  { name: 'Toaster', price: 1400, imageUrl: 'assets/p3.jpg', height:100, productOffer: 'No Cost EMI Card value above ₹1449', }];

  constructor() { }

  ngOnInit() {
   
  }
  buyNow(product) {
    this.boughtProducts.push(product);
    localStorage.setItem('items', JSON.stringify(this.boughtProducts));
  }
}
