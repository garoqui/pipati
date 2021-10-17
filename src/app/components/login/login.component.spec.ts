import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();
  });

  

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have available image', ()=>{
    let image = component.image;
    expect(image).toEqual("assets/alllogo.png")
  })

  it('modalview shoul be false', ()=>{
    let modalview : boolean = component.modalView;
    expect(modalview).toBeFalse()
  })

  it('openmodal should change modalview value', ()=>{
    let modalView = false
    component.openModal();
    console.log(modalView)

  })



});
