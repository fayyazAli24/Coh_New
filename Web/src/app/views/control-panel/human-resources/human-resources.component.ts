import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-human-resources',
  standalone: true,
  imports: [ReactiveFormsModule, NgIconComponent, CommonModule, FormsModule],
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.scss']
})
export class HumanResourcesComponent {

  userForm: FormGroup;
  showFilters = false;

  users: any[] = [
    {
      name: 'Ali',
      gender: 'Male',
      employeeType: 'Full-time',
      phone: '03001234567',
      email: 'ali@example.com',
      joiningDate: '2023-01-01',
      active: true,
    },
    {
      name: 'Sara',
      gender: 'Female',
      employeeType: 'Part-time',
      phone: '03123456789',
      email: 'sara@example.com',
      joiningDate: '2022-10-10',
      active: false,
    }
  ];

  // ✅ ADD THIS: used to reset and apply filters
  originalUsers = [...this.users];

  // ✅ ADD THIS: for filter input
  filters = {
    name: '',
    employeeType: '',
    gender: ''
  };

  pageSize = 5;
  currentPage = 1;
  pageSizes = [5, 10, 20];

  constructor(private fb: FormBuilder, public router: Router, private route: ActivatedRoute) {
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

  get start() {
    return (this.currentPage - 1) * this.pageSize;
  }

  get end() {
    return this.start + this.pageSize;
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get pageNumbers() {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

createUser(role: string) {
    this.router.navigate(['/human-resources-add']);
  }

  editUser(user: any): void {
    console.log('Edit:', user);
  }

  deleteUser(user: any): void {
    console.log('Delete:', user);
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  onPageSizeChange(event: any): void {
    this.pageSize = +event.target.value;
    this.currentPage = 1;
  }

  applyFilters(): void {
    this.users = this.originalUsers.filter(user =>
      (this.filters.name === '' || user.name.toLowerCase().includes(this.filters.name.toLowerCase())) &&
      (this.filters.employeeType === '' || user.employeeType === this.filters.employeeType) &&
      (this.filters.gender === '' || user.gender === this.filters.gender)
    );
    this.currentPage = 1;
  }

  resetFilters(): void {
    this.filters = {
      name: '',
      employeeType: '',
      gender: ''
    };
    this.users = [...this.originalUsers];
    this.currentPage = 1;
  }
}
