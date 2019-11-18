import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespRespostasPage } from './resp-respostas.page';

describe('RespRespostasPage', () => {
  let component: RespRespostasPage;
  let fixture: ComponentFixture<RespRespostasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespRespostasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespRespostasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
