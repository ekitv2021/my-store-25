import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  //This is original products array
  products!:Product[];
  //This is a duplicate products array whose value will change as per the filter
  filteredProducts!: Product[];

  //We are inject the instance of the ProductService class
  constructor(private ps: ProductService){
    // this.products = this.ps.products;
    // this.filteredProducts = this.products;
  }

  errorMessage = null;

  ngOnInit(): void {
      this.ps.getAllProducts().subscribe({
        next: data => {
          this.products = data;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });      
  }

  searchText = ''

  private _filterBy = '';

  //this method will be called when the user will enter some input 
  //in the textbox
  set filterBy(input: string){
    this._filterBy = input;
    this.filterProducts(this._filterBy);
  }

  //this method will be called when the user will display the text
  get filterBy(): string{
    return this._filterBy;
  }

  filterProducts(filterText: string){
    this.filteredProducts = this.products.filter(x => x.name.toLowerCase()
                                                    .includes(filterText.toLowerCase()));
  }

  addToCart(){
    this.ps.increment();
  }
}
