import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoUsuarioComponent } from './requerimento-usuario.component';

describe('RequerimentoUsuarioComponent', () => {
  let component: RequerimentoUsuarioComponent;
  let fixture: ComponentFixture<RequerimentoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequerimentoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimentoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
