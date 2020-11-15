import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { Register } from "./register.component";

describe("Register", () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Register],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
