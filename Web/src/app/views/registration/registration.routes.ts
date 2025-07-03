import { Routes } from '@angular/router';

import { authGuard } from '@/app/core/guards/auth.guard';
import { AlertComponent } from './alert/alert.component';

export const Registration_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    data: { permissions: ['Registration:Alerts']},
    children: [
      {
        path: 'alerts',
        component: AlertComponent,
        data: { title: 'Clinical Alerts' }
      },
    //      {
    //     path: 'medical-history',
    //     component: MedicalHistoryComponent,
    //     data: { title: 'Medical History' }
    //   },
    //   {
    //     path: 'problem-list',
    //     component: ProblemListComponent,
    //     data: { title: 'Problem List' }
    //   },
    //   {
    //     path: 'favorites',
    //     component: FavoritesComponent,
    //     data: { title: 'Favorites' }
    //   },
    //   {
    //     path: 'problem',
    //     component: ProblemComponent,
    //     data: { title: 'problem-list' }
    //   },
    //   {
    //     path: 'allergies',
    //     component: AllergiesComponent,
    //     data: { title: 'Allergies' }
    //   }

    ]
  }
];
