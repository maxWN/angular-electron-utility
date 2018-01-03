import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundWidgetComponent } from './sound-widget.component';

describe('SoundWidgetComponent', () => {
  let component: SoundWidgetComponent;
  let fixture: ComponentFixture<SoundWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
