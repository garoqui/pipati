import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModel } from 'src/app/model/userModel';
import { UsersService } from 'src/app/services/users.service';

import { ScoreComponent } from './score.component';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;
  let usersService : UsersService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreComponent ]
    })
    .compileComponents();
    usersService = TestBed.inject(UsersService)
  });

  it('service userservice createed correctly', ()=>{
    expect(usersService).toBeTruthy();
  })

  it('checking data from service', ()=>{
    const user = usersService.getUser("ALEJO").then(res=>res);    
    expect(usersService).toBeTruthy();
  })


});
