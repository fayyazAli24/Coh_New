import { Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { authGuard } from '@/app/core/guards/auth.guard';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';

export const CLINICAL_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    data: { permissions: ['Clinical:Medical History'] },
    children: [
      {
        path: 'alerts',
        component: AlertsComponent,
        data: { title: 'Clinical Alerts' }
      },
         {
        path: 'medical-history',
        component: MedicalHistoryComponent,
        data: { title: 'Medical History' }
      }
    ]
  }
];
