import { RetrieveUserService } from "./../services/retrieve-user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticateService } from "../services/authenticate.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class Login implements OnInit {
  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private retrieveUserService: RetrieveUserService
  ) {}

  ngOnInit() {}

  onSubmit(event) {
    event.preventDefault();
    let email: string = event.target.email.value;
    let password: string = event.target.password.value;

    this.authService.getToken(email, password).then((tokenObj) => {
      this.retrieveUserService
        .retrireveUser(tokenObj.token, undefined)
        .then((body: any) => {
          console.log(body);
          localStorage.token = tokenObj.token;
          localStorage.setItem("name", JSON.stringify(body.name));
          localStorage.setItem("surname", JSON.stringify(body.surname));
          localStorage.setItem("age", JSON.stringify(body.age));
          localStorage.setItem("sex", JSON.stringify(body.sex));
          localStorage.setItem("location", JSON.stringify(body.location));
          localStorage.setItem("email", JSON.stringify(body.email));
          localStorage.setItem("members", JSON.stringify(body.members));
          localStorage.setItem("mood", JSON.stringify(body.mood));
          this.router.navigate([""]);
        });
    });
  }
}
