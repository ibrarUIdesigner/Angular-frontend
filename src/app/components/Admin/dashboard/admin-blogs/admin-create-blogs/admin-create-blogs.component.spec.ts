import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateBlogsComponent } from './admin-create-blogs.component';

describe('AdminCreateBlogsComponent', () => {
  let component: AdminCreateBlogsComponent;
  let fixture: ComponentFixture<AdminCreateBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
