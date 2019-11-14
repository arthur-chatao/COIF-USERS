import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespRecebidasPage } from './resp-recebidas.page';

describe('RespRecebidasPage', () => {
  let component: RespRecebidasPage;
  let fixture: ComponentFixture<RespRecebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespRecebidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespRecebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
