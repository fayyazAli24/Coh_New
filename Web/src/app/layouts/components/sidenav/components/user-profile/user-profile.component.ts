import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgbCollapseModule, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import { AuthService } from '../../../../../core/services/auth.service'; // Adjust path
import { Router } from '@angular/router';

import {userDropdownItems} from '@layouts/components/data';

@Component({
  selector: 'app-user-profile',
  imports: [
    RouterLink,
    NgbCollapseModule,
    NgbDropdown,
    //NgbDropdownToggle,
    NgbDropdownMenu,
    NgIcon
  ],

  templateUrl: './user-profile.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserProfileComponent {
  menuItems = userDropdownItems
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  handleAction(action: string): void {
    // debugger
    if (action === 'logout') {
      this.authService.logout();
      this.router.navigate(['/login']); // or your login route
    }
  }
  
  
}
