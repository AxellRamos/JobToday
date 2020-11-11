import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilempleoPage } from './perfilempleo.page';

describe('PerfilempleoPage', () => {
  let component: PerfilempleoPage;
  let fixture: ComponentFixture<PerfilempleoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilempleoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilempleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
