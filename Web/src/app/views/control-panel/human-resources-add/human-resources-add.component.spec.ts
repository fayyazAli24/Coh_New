import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesAddComponent } from './human-resources-add.component';

describe('HumanResourcesAddComponent', () => {
  let component: HumanResourcesAddComponent;
  let fixture: ComponentFixture<HumanResourcesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanResourcesAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanResourcesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
