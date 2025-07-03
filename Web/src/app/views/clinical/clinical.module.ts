import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CLINICAL_ROUTES } from './clinical.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forChild(CLINICAL_ROUTES)
  ]
})
export class ClinicalModule { }
