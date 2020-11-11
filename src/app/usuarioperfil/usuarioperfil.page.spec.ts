import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioperfilPage } from './usuarioperfil.page';

describe('UsuarioperfilPage', () => {
  let component: UsuarioperfilPage;
  let fixture: ComponentFixture<UsuarioperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
