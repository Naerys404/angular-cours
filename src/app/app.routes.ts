import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent:()=> import('./views/home/home').then(m=>m.Home)
    },
    {   path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadComponent:()=> import('./views/about/about').then(m=>m.About)
    },
    {
        path: 'lessons',
        children: [
            {
                path: '',
                loadComponent:()=> import('./views/lessons/lessons').then(m=>m.Lessons)
            },
            {
                path: 'text-interpolation',
                loadComponent:()=> import('./views/lessons/text-interpolation/text-interpolation').then(m=>m.TextInterpolation)
            },
            {
                path: 'property-bindings',
                loadComponent:()=> import('./views/lessons/property-binding/property-binding').then(m=>m.PropertyBinding)
            },
            {
                path: 'event-binding',
                loadComponent:()=> import('./views/lessons/event-binding/event-binding').then(m=>m.EventBinding)
            }
        ]
    },
    {
        path: 'exercices',
        children: [
            {
                path: '',
                loadComponent:()=> import('./views/exercices/exercices').then(m=>m.Exercices)
            },
            {
                path: 'property-bindings',
                loadComponent:()=> import('./views/exercices/property-binding/property-binding').then(m=>m.PropertyBinding)
            },
            {
                path: 'event-bindings',
                loadComponent:()=> import('./views/exercices/event-binding/event-binding').then(m=>m.EventBinding)
            }
        ]
    },
    {
        path: '**',
        loadComponent:()=> import('./views/not-found/not-found').then(m=>m.NotFound)
    },
];
