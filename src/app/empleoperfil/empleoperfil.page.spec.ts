import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpleoperfilPage } from './empleoperfil.page';

describe('EmpleoperfilPage', () => {
  let component: EmpleoperfilPage;
  let fixture: ComponentFixture<EmpleoperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleoperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpleoperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
