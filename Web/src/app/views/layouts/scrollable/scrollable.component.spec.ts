import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableComponent } from './scrollable.component';

describe('ScrollableComponent', () => {
  let component: ScrollableComponent;
  let fixture: ComponentFixture<ScrollableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
