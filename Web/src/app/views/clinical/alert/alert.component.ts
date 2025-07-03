import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,NgIconComponent
    ,FormsModule,
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {
    alertForm!: FormGroup;
    getAlert: any[] = [];
    MyAlertsData: any[] = [];
    isLoading: boolean = false;

    currentPage: number = 1;
    pageSize: number = 10; // ← Yeh single selected value hoga
    pageSizes = [5, 10, 25, 50];
    totalPages = 0;
    pageNumbers: number[] = [];

    constructor(private fb: FormBuilder, private router: Router) {}

    ngOnInit(): void {
      this.alertForm = this.fb.group({
        alertType: [null, Validators.required],
        repeatDate: [null, Validators.required],
        startDate: [null, Validators.required],
        message: ['', Validators.required],
        status: [null],
        updatedBy: [''],
        enteredBy: [''],
        enteredDate: [null],
      });

      this.getAlert = [
        { typeId: 1, name: 'Warning' },
        { typeId: 2, name: 'Reminder' },
        { typeId: 3, name: 'Critical' },
      ];

      this.MyAlertsData = [
        {
          alertType: 1,
          startDate: '2025-07-01',
          repeatDate: '2025-07-05',
          message: 'First alert message',
          status: 'Active',
          updatedBy: 'Admin',
          enteredBy: 'Admin',
          enteredDate: '2025-07-01',
        },
        {
          alertType: 2,
          startDate: '2025-06-28',
          repeatDate: '2025-07-10',
          message: 'Second alert info',
          status: 'Pending',
          updatedBy: 'Doctor',
          enteredBy: 'Receptionist',
          enteredDate: '2025-06-28',
        },
        // ... add more for testing pagination
      ];

      this.calculatePagination();
    }

    goBackToList() {
      this.router.navigate(['']);
    }

    onSubmit() {
      if (this.alertForm.invalid) return;

      this.isLoading = true;

      setTimeout(() => {
        const formData = this.alertForm.value;
        this.MyAlertsData.push(formData);
        this.alertForm.reset();
        this.isLoading = false;
        this.calculatePagination(); // recalculate pages
      }, 2000);
    }

    getAlertTypeName(typeId: number): string {
      const match = this.getAlert.find((a: any) => a.typeId === typeId);
      return match ? match.name : typeId.toString();
    }

    get start(): number {
      return (this.currentPage - 1) * this.pageSize;
    }

    get end(): number {
      return Math.min(this.start + this.pageSize, this.MyAlertsData.length);
    }

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }

    goToPage(page: number) {
      this.currentPage = page;
    }

  onPageSizeChange(event: any) {
  this.pageSize = +event.target.value;
  this.currentPage = 1;
  this.calculatePagination();
}

    calculatePagination() {
      this.totalPages = Math.ceil(this.MyAlertsData.length / this.pageSize);
      this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

