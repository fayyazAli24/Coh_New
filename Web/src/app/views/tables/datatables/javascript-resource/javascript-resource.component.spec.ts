import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptResourceComponent } from './javascript-resource.component';

describe('JavascriptResourceComponent', () => {
  let component: JavascriptResourceComponent;
  let fixture: ComponentFixture<JavascriptResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
