import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTasasComponent } from './crear-tasas.component';

describe('CrearTasasComponent', () => {
  let component: CrearTasasComponent;
  let fixture: ComponentFixture<CrearTasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTasasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
