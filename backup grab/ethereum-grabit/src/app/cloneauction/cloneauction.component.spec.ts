import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneauctionComponent } from './cloneauction.component';

describe('CloneauctionComponent', () => {
  let component: CloneauctionComponent;
  let fixture: ComponentFixture<CloneauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
