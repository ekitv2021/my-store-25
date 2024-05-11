import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addForm!:FormGroup;

  ngOnInit(): void {
      this.addForm = new FormGroup({
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
    return this.addForm.controls; 
    //this will return the access to all the controls of the addForm
  }

  constructor(private ps: ProductService,
              private router: Router
  ){}

  addProduct(){
    this.ps.insertProduct(this.addForm.value)
           .subscribe(data => this.router.navigate(['/products']))
  }
}
