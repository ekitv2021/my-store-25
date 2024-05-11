import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private ps: ProductService,
              private router: Router){}

  id!:number;
  // product!:Product;
  product$!:Observable<Product>

  ngOnInit(): void {
      this.route.params.subscribe(data => this.id = data['id']);
      // this.ps.getProductById(this.id).subscribe(data => this.product = data);
      this.product$ = this.ps.getProductById(this.id);
  }

  goBack(){
    this.router.navigate(['/products']);
  }

  delete(id: number){
    this.ps.deleteProduct(id)
        .subscribe(data => this.router.navigate(['/products']));
  }
}
