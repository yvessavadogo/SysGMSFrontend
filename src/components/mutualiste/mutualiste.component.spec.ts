import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualisteComponent } from './mutualiste.component';

describe('MutualisteComponent', () => {
  let component: MutualisteComponent;
  let fixture: ComponentFixture<MutualisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutualisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
