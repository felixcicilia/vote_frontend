import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTasasComponent } from './editar-tasas.component';

describe('EditarTasasComponent', () => {
  let component: EditarTasasComponent;
  let fixture: ComponentFixture<EditarTasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTasasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
