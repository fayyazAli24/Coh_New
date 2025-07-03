
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoritesComponent } from '../favorites/favorites.component';


@Component({
  selector: 'app-problem-list',

  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbNavModule,
    NgIconComponent,

    ],


  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.scss'
})
export class ProblemListComponent {

    activeTabId = 1;

    medicalForm!: FormGroup;
    pageNumbers: number[] = [];
    totalPages = 0;
    searchResults: any[] = [];
    currentPage: number = 1;
    pageSize: number = 10;
    pageSizes = [5, 10, 25, 50];
    providerList: any[] = [];

    medicalHistoryData = [
      {
        provider: 1,
        problem: 'Hypertension',
        comments: 'Patient needs regular monitoring',
        confidential: true,
        status: 'Active',
        startDate: '2024-01-01',
        endDate: '2024-12-31'
      },
      {
        provider: 2,
        problem: 'Diabetes',
        comments: 'Monthly insulin checkup',
        confidential: false,
        status: 'Inactive',
        startDate: '2023-05-10',
        endDate: '2023-12-15'
      }
    ];

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
      this.medicalForm = this.fb.group({
        provider: [''],
        providerName: [''],
        code: [''],
        problem: [''],
        icdVersion: [''],
        confidential: [''],
        startDate: [''],
        endDate: [''],
        comments: [''],
        status: ['']
      });
    }

    // ✅ Reset form
    onClear(): void {
      this.medicalForm;
    }
    get start(): number {
        return (this.currentPage - 1) * this.pageSize;
      }

      get end(): number {
        const endValue = this.start + this.pageSize;
        return endValue > this.medicalHistoryData.length ? this.medicalHistoryData.length : endValue;
      }

      get paginatedData() {
        return this.medicalHistoryData.slice(this.start, this.end);
      }
    prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      }

      nextPage() {
        if (this.end < this.medicalHistoryData.length) this.currentPage++;
      }

      goToPage(page: number) {
        this.currentPage = page;
      }

      onPageSizeChange(event: any) {
        this.pageSize = +event.target.value;
        this.currentPage = 1;
      }
}
