import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { OrderComponent } from "./order/order.component";
import { ReviewComponent } from "./review/review.component";
import { UpdateProductComponent } from "./update-product/update-product.component";

const routes: Routes = [
    { path: "", component: ProductListComponent, title: "MyStore | Products" },  
    { path: "add", component: AddProductComponent, title: "MyStore | Add Product"},
    { path: ":id", component: ProductDetailsComponent, title: "MyStore | Details",
      children: [
        { path: "review", component: ReviewComponent, title: "MyStore | Review" },

        { path: "order", component:OrderComponent, title: "MyStore | Order" }
      ]
     },
    { path: ":id/edit", component: UpdateProductComponent, title: "MyStore | Update Product" }
  ]

@NgModule({
    imports: [
        //forChild in the feature module
        RouterModule.forChild(routes),
    ]
})
export class ProductRoutingModule{}