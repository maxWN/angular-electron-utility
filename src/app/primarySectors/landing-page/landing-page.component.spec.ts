import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { ToolDescriptionsUS, ToolDescriptionsDE, ToolDescriptionsES } from '../../shared/models/toolDescriptions';
import { LandingPageComponent } from './landing-page.component';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  //represents HTML debug element
  let de: DebugElement;
  //description models
  let langDescr:ToolDescriptionsUS=new ToolDescriptionsUS();

  //detects if component is created successfully
  fixture.detectChanges();

  // service = de.injector.get();
  // let langDescr:ToolDescriptionsUS=new ToolDescriptionsUS();
  // oversee = spyOn(service, 'explanationProvider').and.returnValue(of(""))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    //compiles template and css
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //toBeTruthy() tests whether or not something evaluates to true or false
    expect(component).toBeTruthy();
  });

  // it('should have content Music Player'), ()=>{
  //   expect(component.content).toContain('Music Player');
  // }

  // it('should evaluate to FILE_MANAGER', () => {
  //   expect()
  // })

  /**
   * TODO: Find a way to create unit tests for Angular/Electron apps
   * https://medium.com/@MatheusCAS/unit-testing-with-jamine-angular-2-electron-862b5c4bbccd
   */
  
});
