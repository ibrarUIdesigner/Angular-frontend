import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleArticlesComponent } from './module-articles.component';

describe('ModuleArticlesComponent', () => {
  let component: ModuleArticlesComponent;
  let fixture: ComponentFixture<ModuleArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
