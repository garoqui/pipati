import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesetComponent } from './gameset.component';

describe('GamesetComponent', () => {
  let component: GamesetComponent;
  let fixture: ComponentFixture<GamesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
