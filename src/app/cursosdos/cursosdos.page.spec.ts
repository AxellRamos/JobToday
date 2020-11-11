import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosdosPage } from './cursosdos.page';

describe('CursosdosPage', () => {
  let component: CursosdosPage;
  let fixture: ComponentFixture<CursosdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosdosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
