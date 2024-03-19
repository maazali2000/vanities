import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcVanitiesComponent } from './pvc-vanities.component';

describe('PvcVanitiesComponent', () => {
  let component: PvcVanitiesComponent;
  let fixture: ComponentFixture<PvcVanitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PvcVanitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvcVanitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
