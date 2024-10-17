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
                path:'projects',
                loadComponent:() => import('./projects/projects.component').then(m=>m.ProjectsComponent)
            },
            {
                path:'skills',
                loadComponent:() => import('./skills/skills.component').then(m=>m.SkillsComponent)
            },
            {
                path:'**',
                redirectTo:'home'
            }
        ]
    }
        

];
