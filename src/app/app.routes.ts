import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./results/results.component')
  },

  {
    path: 'new',
    loadComponent: () => import('./survey-form/survey-form.component')
  }

];
