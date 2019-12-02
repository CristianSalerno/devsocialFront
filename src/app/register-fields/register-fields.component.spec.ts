import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFieldsComponent } from './register-fields.component';

describe('RegisterFieldsComponent', () => {
  let component: RegisterFieldsComponent;
  let fixture: ComponentFixture<RegisterFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
