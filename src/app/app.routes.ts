import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        children: [
            {
                path:'home',
                loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
            },
            {
                path:'**',
                redirectTo:'home'
            }
        ]
    }
        

];
