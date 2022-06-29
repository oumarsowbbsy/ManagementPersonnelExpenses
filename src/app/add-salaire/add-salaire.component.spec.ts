import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaireComponent } from './add-salaire.component';

describe('AddSalaireComponent', () => {
  let component: AddSalaireComponent;
  let fixture: ComponentFixture<AddSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
