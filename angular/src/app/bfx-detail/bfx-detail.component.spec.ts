import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfxDetailComponent } from './bfx-detail.component';

describe('BfxDetailComponent', () => {
  let component: BfxDetailComponent;
  let fixture: ComponentFixture<BfxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfxDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
