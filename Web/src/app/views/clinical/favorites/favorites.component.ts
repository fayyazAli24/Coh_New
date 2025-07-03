
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  imports: [ReactiveFormsModule,
            CommonModule,
            NgIconComponent,
            FormsModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

    favoritesForm!: FormGroup;

    icdVersionList: string[] = ['ICD-9-CM', 'ICD-10-CM', 'SNOMED'];
    pageNumbers: number[] = [];
    totalPages = 0;
    // 🟦 Dummy Favorites Data
    favoritesData = [
      {
        providerName: 'Dr. Ahmed Ali',
        code: '002.0',
        problem: 'Typhoid fever',
        icdVersion: 'ICD-9-CM',
        confidential: true,
        status: 'Active',
        startDate: '2024-06-12',
        endDate: '2024-06-15',
        comments: 'comments123'
      }
    ];

    searchResults: any[] = [];
    currentPage: number = 1;
    pageSize: number = 10;
    pageSizes = [5, 10, 25, 50];

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
      this.favoritesForm = this.fb.group({
        icdVersion: [''],
        searchCode: [''],
        startingCode: ['']
      });
    }

    // 🔎 Search Handler
    onSearch(): void {
      const formData = this.favoritesForm.value;
      console.log('Search form data:', formData);

      this.searchResults = [
        {
          code: '002.0',
          icdVersion: formData.icdVersion || 'ICD-9-CM',
          description: 'Typhoid fever'
        }
      ];
    }

    // 📄 Pagination
    get start(): number {
      return (this.currentPage - 1) * this.pageSize;
    }

    get end(): number {
      const endValue = this.start + this.pageSize;
      return endValue > this.favoritesData.length ? this.favoritesData.length : endValue;
    }

    get paginatedData() {
      return this.favoritesData.slice(this.start, this.end);
    }

    onPageSizeChange(event: any) {
      this.pageSize = +event.target.value;
      this.currentPage = 1;
    }

    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    }

    nextPage() {
      if (this.end < this.favoritesData.length) this.currentPage++;
    }

    goToPage(page: number) {
      this.currentPage = page;
    }
  }
