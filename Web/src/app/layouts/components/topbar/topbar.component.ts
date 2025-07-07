import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {LayoutStoreService} from '@core/services/layout-store.service';
import {LucideAngularModule, Search} from 'lucide-angular';

import {MegaMenuComponent} from '@layouts/components/topbar/components/mega-menu/mega-menu.component';
import {
    LanguageDropdownComponent
} from '@layouts/components/topbar/components/language-dropdown/language-dropdown.component';
import {
    MessagesDropdownComponent
} from '@layouts/components/topbar/components/messages-dropdown/messages-dropdown.component';
import {ThemeTogglerComponent} from '@layouts/components/topbar/components/theme-toggler/theme-toggler.component';
import {
    CustomizerTogglerComponent
} from '@layouts/components/topbar/components/customizer-toggler/customizer-toggler.component';
import {UserProfileComponent} from '@layouts/components/topbar/components/user-profile/user-profile.component';
import {
    NotificationDropdownComponent
} from '@layouts/components/topbar/components/notification-dropdown/notification-dropdown.component';
import { AccordionService } from '@core/services/accordion.service';
import { IconsModule } from '@/app/shared/icons.module';
import { Stethoscope } from 'lucide-angular'; // 👈 this is required

@Component({
    selector: 'app-topbar',
    imports: [
        NgIcon,
        RouterLink,
        MegaMenuComponent,
        // LanguageDropdownComponent,
        // MessagesDropdownComponent,
        // CustomizerTogglerComponent,
        ThemeTogglerComponent,
        UserProfileComponent,
        NotificationDropdownComponent,
        IconsModule

    ],
     standalone: true,
    templateUrl: './topbar.component.html'
})
export class TopbarComponent {
    constructor(public layout: LayoutStoreService,
        private accordionService: AccordionService
    ) {
    }

    toggleSidebar() {

        const html = document.documentElement;
        const currentSize = html.getAttribute('data-sidenav-size');
        const savedSize = this.layout.sidenavSize;

        if (currentSize === 'offcanvas') {
            html.classList.toggle('sidebar-enable')
            this.layout.showBackdrop()
        } else if (savedSize === 'compact') {
            this.layout.setSidenavSize(currentSize === 'compact' ? 'condensed' : 'compact', false);
        } else {
            this.layout.setSidenavSize(currentSize === 'condensed' ? 'default' : 'condensed');
        }
    }

    Search = Search;

  @Output() patientBannerToggle = new EventEmitter<boolean>();
  showPatientBanner = true;


   togglePatientBanner() {
    this.showPatientBanner = !this.showPatientBanner;
    this.patientBannerToggle.emit(this.showPatientBanner);
  }
}
