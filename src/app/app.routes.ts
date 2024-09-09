import { Routes } from '@angular/router';
import { ProductsComponent } from './Component/products/products.component';

export const routes: Routes = [
    {
        path: '',
    component: ProductsComponent,
    pathMatch: 'full',
    }

];
