import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTasasComponent } from './lista-tasas.component';

describe('ListaTasasComponent', () => {
  let component: ListaTasasComponent;
  let fixture: ComponentFixture<ListaTasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTasasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
