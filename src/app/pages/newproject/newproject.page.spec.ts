import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewprojectPage } from './newproject.page';

describe('NewprojectPage', () => {
  let component: NewprojectPage;
  let fixture: ComponentFixture<NewprojectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewprojectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewprojectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
