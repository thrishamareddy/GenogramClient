import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenogramComponent } from './genogram.component';
import { CommonModule } from '@angular/common';

describe('GenogramComponent', () => {
  let component: GenogramComponent;
  let fixture: ComponentFixture<GenogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenogramComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

