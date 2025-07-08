import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosPrecos } from './planos-precos';

describe('PlanosPrecos', () => {
  let component: PlanosPrecos;
  let fixture: ComponentFixture<PlanosPrecos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanosPrecos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanosPrecos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
