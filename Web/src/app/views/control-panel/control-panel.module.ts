import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Control_Panel_ROUTES } from './control-panel.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forChild(Control_Panel_ROUTES)
  ]
})
export class ControlPanelModule { }
