import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'results',
    loadComponent: () => import('./results/results.component')
  },

  {
    path: 'new',
    loadComponent: () => import('./survey-form/survey-form.component')
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
  }

];
