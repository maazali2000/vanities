import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanitiesFurnitureComponent } from './vanities-furniture.component';

describe('VanitiesFurnitureComponent', () => {
  let component: VanitiesFurnitureComponent;
  let fixture: ComponentFixture<VanitiesFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VanitiesFurnitureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VanitiesFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
