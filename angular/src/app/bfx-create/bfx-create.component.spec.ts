import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfxCreateComponent } from './bfx-create.component';

describe('BfxCreateComponent', () => {
  let component: BfxCreateComponent;
  let fixture: ComponentFixture<BfxCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfxCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfxCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
