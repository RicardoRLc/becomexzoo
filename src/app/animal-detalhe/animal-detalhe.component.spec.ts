import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetalheComponent } from './animal-detalhe.component';

describe('AnimalDetalheComponent', () => {
  let component: AnimalDetalheComponent;
  let fixture: ComponentFixture<AnimalDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
