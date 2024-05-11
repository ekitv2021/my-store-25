import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updateForm!:FormGroup;

  id!:number;
  product$!:Observable<Product>

  ngOnInit(): void {
      this.route.params.subscribe(data => this.id = data['id']);
      this.product$ = this.ps.getProductById(this.id);
      this.updateForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        price: new FormControl('', [
                                      Validators.required, 
                                      Validators.min(1), 
                                      Validators.max(150000)
                                    ]),
        image: new FormControl('/assets/Apple iPhone 13.jpg'),
        description: new FormControl('')
      })
  }

  get f(){
    return this.updateForm.controls; 
    //this will return the access to all the controls of the addForm
  }

  constructor(private ps: ProductService,
              private router: Router,
              private route: ActivatedRoute
  ){}

  updateProduct(){
    this.ps.updateProduct(this.id, this.updateForm.value).subscribe(
      data => this.router.navigate(['/products'])
    )
  }
}
