import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router,NavigationEnd } from '@angular/router';
import { MatomoTracker } from 'ngx-matomo';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(private route:Router, private matomoTracker: MatomoTracker){

    this.routeEvent(this.route);
  }  

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        console.log('Matamo track this page....')
        this.matomoTracker.setUserId('angular-routing-one-user');
        this.matomoTracker.setDocumentTitle('angular-routing-one');
        this.matomoTracker.trackPageView();
      }
    });
  }
 }