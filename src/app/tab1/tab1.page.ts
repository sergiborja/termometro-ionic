import { Component } from "@angular/core";
import { unHash } from "../utils/password-encrypt";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  userName: string = JSON.parse(localStorage.name);
  sex: string = JSON.parse(localStorage.sex);

  constructor() {}
}
