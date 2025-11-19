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
            },
            {
                path: 'child',
                loadComponent:()=> import('./views/lessons/child.component/child.component').then(m=>m.ChildComponent)
            },
            {
                path: 'parent',
                loadComponent:()=> import('./views/lessons/parent.component/parent.component').then(m=>m.ParentComponent)
            },
            {
                path: 'observables',
                loadComponent:()=> import('./views/lessons/observables/observables').then(m=>m.Observables)
            },
            {
                path: 'signals',
                loadComponent:()=> import('./views/lessons/signals/signals').then(m=>m.Signals)
            },
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
            },
            {
                path: 'tp-giga-bind',
                loadComponent:()=> import('./views/exercices/tp-giga-bind/tp-giga-bind').then(m=>m.TpGigaBind)
            },
            {
                path: 'meteo',
                loadComponent:()=> import('./views/exercices/meteo/meteo').then(m=>m.Meteo)
            },
            {
                path: 'communication',
                loadComponent:()=> import('./views/exercices/communication-component/communication-component').then(m=>m.CommunicationComponent)
            },
            {
                path: 'activeUser',
                loadComponent:()=> import('./views/exercices/active-user-component/active-user-component').then(m=>m.ActiveUserComponent)
            },
            {
                path: 'userData',
                loadComponent:()=> import('./views/exercices/user-data-component/user-data-component').then(m=>m.UserDataComponent)
            },

        ]
    },
    {
        path: '**',
        loadComponent:()=> import('./views/not-found/not-found').then(m=>m.NotFound)
    },
];
