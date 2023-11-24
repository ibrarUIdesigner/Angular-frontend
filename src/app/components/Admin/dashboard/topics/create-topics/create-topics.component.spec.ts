import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopicsComponent } from './create-topics.component';

describe('CreateTopicsComponent', () => {
  let component: CreateTopicsComponent;
  let fixture: ComponentFixture<CreateTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
