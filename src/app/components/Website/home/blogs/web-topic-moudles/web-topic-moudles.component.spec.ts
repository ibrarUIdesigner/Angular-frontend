import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTopicMoudlesComponent } from './web-topic-moudles.component';

describe('WebTopicMoudlesComponent', () => {
  let component: WebTopicMoudlesComponent;
  let fixture: ComponentFixture<WebTopicMoudlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebTopicMoudlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebTopicMoudlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
