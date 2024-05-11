import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReviewComponent } from './review/review.component';
import { ProductService } from './product.service';
import { RouterModule, Routes } from '@angular/router';
import { verifyIdGuardGuard } from './verify-id-guard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    OrderComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ReviewComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    RouterModule
  ]
})
export class ProductModule { }
