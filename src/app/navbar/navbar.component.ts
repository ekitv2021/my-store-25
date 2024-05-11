import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private ps: ProductService){}

  cartCount = 0;

  cartCount$ = new BehaviorSubject<number>(0);

  ngOnInit(): void {
      // this.ps.cartCount$.subscribe(val => this.cartCount = val);
      this.cartCount$ = this.ps.cartCount$;
  }

  updateCount(){
    this.cartCount = this.ps.cartCountCommon;
  }
}
