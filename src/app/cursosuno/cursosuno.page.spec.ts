import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosunoPage } from './cursosuno.page';

describe('CursosunoPage', () => {
  let component: CursosunoPage;
  let fixture: ComponentFixture<CursosunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
