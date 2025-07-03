import { Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { authGuard } from '@/app/core/guards/auth.guard';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProblemComponent } from './problem/problem.component';
import { AllergiesComponent } from './allergies/allergies.component';

export const CLINICAL_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    data: { permissions: ['Clinical:Medical History'] },
    children: [
      {
        path: 'alerts',
        component: AlertComponent,
        data: { title: 'Clinical Alerts' }
      },
         {
        path: 'medical-history',
        component: MedicalHistoryComponent,
        data: { title: 'Medical History' }
      },
      {
        path: 'problem-list',
        component: ProblemListComponent,
        data: { title: 'Problem List' }
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        data: { title: 'Favorites' }
      },
      {
        path: 'problem',
        component: ProblemComponent,
        data: { title: 'problem-list' }
      },
      {
        path: 'allergies',
        component: AllergiesComponent,
        data: { title: 'Allergies' }
      }

    ]
  }
];
