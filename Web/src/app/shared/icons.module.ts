import { NgModule } from '@angular/core';
import { LucideAngularModule  } from 'lucide-angular';
import {
  Stethoscope,
  User,
  UserCheck,
  PanelTop,
  ChevronDown,
  ChevronUp,
    Pin,
    PinOff,
    Trash2

} from 'lucide-angular';

const icons = {
  Stethoscope,
  User,
  UserCheck,
  PanelTop,
  ChevronDown,
  ChevronUp,
    Pin,
    PinOff,
    Trash2

};
@NgModule({
    imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule]
})
export class IconsModule {}
