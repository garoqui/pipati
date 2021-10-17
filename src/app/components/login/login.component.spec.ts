import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { UsersService } from "src/app/services/users.service";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [UsersService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    userService = TestBed.inject(UsersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should have available image", () => {
    let image = component.image;
    expect(image).toEqual("assets/alllogo.png");
  });

  it("modalview shoul be false", () => {
    let modalview: boolean = component.modalView;
    expect(modalview).toBeFalse();
  });

  it("openmodal should change modalview value", () => {
    let modalView = false;
    component.openModal();
    console.log(modalView);
  });

  it("should have function createUser", () => {
    expect(component.createUser).toBeTruthy();
  });

  it("service for creating user is called", () => {
    spyOn(userService, "createUser");
    let user = component.createUser();
    expect(userService.createUser).toHaveBeenCalled();
  });
});
