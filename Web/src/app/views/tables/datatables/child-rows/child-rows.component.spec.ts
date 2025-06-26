import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRowsComponent } from './child-rows.component';

describe('ChildRowsComponent', () => {
  let component: ChildRowsComponent;
  let fixture: ComponentFixture<ChildRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
