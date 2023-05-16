import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExperiencesComponent } from './online-experiences.component';

describe('OnlineExperiencesComponent', () => {
  let component: OnlineExperiencesComponent;
  let fixture: ComponentFixture<OnlineExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
