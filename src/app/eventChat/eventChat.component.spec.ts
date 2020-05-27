import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChatComponent } from './eventChat.component';

describe('EventChatComponent', () => {
  let component: EventChatComponent;
  let fixture: ComponentFixture<EventChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
