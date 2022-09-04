import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foo2Component } from './foo2.component';

describe('Foo2Component', () => {
  let component: Foo2Component;
  let fixture: ComponentFixture<Foo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
