import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductModule } from './product/product.module';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: "products", loadChildren: () => import('./product/product.module')
                                              .then(m => m.ProductModule)},
  { path: "", component: HomeComponent, title: "MyStore | Home" },
  { path: "profile", component: ProfileComponent, title: "MyStore | Profile" },
  { path: "**", component: PagenotfoundComponent, title: "MyStore | Page Not Found" }
]

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    PagenotfoundComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // ProductModule //this is for eagar loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
