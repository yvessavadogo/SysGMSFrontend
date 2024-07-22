import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneAchargeComponent } from './personne-acharge.component';

describe('PersonneAchargeComponent', () => {
  let component: PersonneAchargeComponent;
  let fixture: ComponentFixture<PersonneAchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonneAchargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneAchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
