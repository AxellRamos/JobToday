import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasantiaPage } from './pasantia.page';

describe('PasantiaPage', () => {
  let component: PasantiaPage;
  let fixture: ComponentFixture<PasantiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasantiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasantiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
