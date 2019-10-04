import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  boughtProducts: Array<any> = [];
  total: Number = 0;

  constructor() { }
  
  ngOnInit() {
    console.log(localStorage.getItem('items'));
    this.boughtProducts = JSON.parse(localStorage.getItem('items'));
    this.boughtProducts.forEach(item => {
      this.total = this.total + item.price;
    });
  }
  delete(name) {
    console.log(name);
    for(var i=0; i < this.boughtProducts.length; i++)
    {
      //this.boughtProducts.forEach(item => {
        if(this.boughtProducts[i]["name"]==name){
          this.boughtProducts.splice(i,1);

        
        }
   
    }}
}
