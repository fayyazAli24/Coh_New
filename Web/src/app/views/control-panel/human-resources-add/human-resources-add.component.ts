import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-human-resources-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconComponent,
    NgxMaskDirective,
    NgxIntlTelInputModule,

  ],
  templateUrl: './human-resources-add.component.html',
  styleUrl: './human-resources-add.component.scss',
  providers: [provideNgxMask()] // ✅ FIX: Added provider here
})
export class HumanResourcesAddComponent {

  userForm!: FormGroup;
  selectedMask = '00000000000';


  constructor(
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      name: [''],
      gender: [''],
      employeeType: [''],
      phone: [''],
      email: [''],
      joiningDate: [''],
      active: [false]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
    } else {
      console.warn('Form is invalid');
    }
  }

  onlyNumbers(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/[0-9]/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }


setMaskByCountry(countryCode: string) {
  switch (countryCode) {
    case 'US':
      this.selectedMask = '(000) 000-0000';
      break;
    case 'UK':
      this.selectedMask = '00000 000000';
      break;
    case 'PK':
      this.selectedMask = '00000000000';
      break;
    default:
      this.selectedMask = '00000000000'; // fallback
  }
}

}
