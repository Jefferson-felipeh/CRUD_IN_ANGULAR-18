import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelConfirmDelComponent } from './model-confirm-del.component';

describe('ModelConfirmDelComponent', () => {
  let component: ModelConfirmDelComponent;
  let fixture: ComponentFixture<ModelConfirmDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelConfirmDelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelConfirmDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
