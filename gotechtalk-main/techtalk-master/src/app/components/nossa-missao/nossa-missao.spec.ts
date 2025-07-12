import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossaMissao } from './nossa-missao';

describe('NossaMissao', () => {
  let component: NossaMissao;
  let fixture: ComponentFixture<NossaMissao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossaMissao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossaMissao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
