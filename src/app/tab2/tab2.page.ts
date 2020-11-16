import { RetrieveUserService } from "./../services/retrieve-user.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  members: any = JSON.parse(localStorage.membersInfo);

  constructor(private retrieveUserService: RetrieveUserService) {
    if (!this.members) {
      const members = [];
      JSON.parse(localStorage.members).map((id) => {
        this.retrieveUserService.retrireveUser(null, id).then((member) => {
          members.push(member);
          if (members.length === JSON.parse(localStorage.members).length) {
            localStorage.setItem("membersInfo", JSON.stringify(members));
            this.members = members;
          }
        });
      });
    }
  }
}
