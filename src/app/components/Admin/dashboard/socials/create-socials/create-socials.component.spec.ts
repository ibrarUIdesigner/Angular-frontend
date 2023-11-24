import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSocialsComponent } from './create-socials.component';

describe('CreateSocialsComponent', () => {
  let component: CreateSocialsComponent;
  let fixture: ComponentFixture<CreateSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSocialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
