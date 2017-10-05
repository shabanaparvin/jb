import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdebtComponent } from './editdebt.component';

describe('EditdebtComponent', () => {
  let component: EditdebtComponent;
  let fixture: ComponentFixture<EditdebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
