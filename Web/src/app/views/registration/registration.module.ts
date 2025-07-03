import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Registration_ROUTES } from './registration.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forChild(Registration_ROUTES)
  ]
})
export class ClinicalModule { }
