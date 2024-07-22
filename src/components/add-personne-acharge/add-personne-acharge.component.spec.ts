import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonneAchargeComponent } from './add-personne-acharge.component';

describe('AddPersonneAchargeComponent', () => {
  let component: AddPersonneAchargeComponent;
  let fixture: ComponentFixture<AddPersonneAchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonneAchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonneAchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
