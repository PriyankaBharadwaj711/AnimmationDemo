import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentPdfComponent } from './consent-pdf.component';

describe('ConsentPdfComponent', () => {
  let component: ConsentPdfComponent;
  let fixture: ComponentFixture<ConsentPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
