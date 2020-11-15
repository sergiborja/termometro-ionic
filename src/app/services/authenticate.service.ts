import { RetrieveUserService } from "./retrieve-user.service";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthenticateService {
  constructor(
    private http: HttpClient,
    private retrieveUserService: RetrieveUserService
  ) {}

  public async getToken(email: string, password: string): Promise<any> {
    // const hashSync = bcryptjs.hashSync(password, 10);
    return this.http
      .post(
        `${environment.apiUrl}/users/auth`,
        { email, password },
        { responseType: "text" }
      )
      .toPromise()
      .then((token: string) => {
        return { token: JSON.parse(token) };
      })
      .catch(({ error }) => {
        return { error: error };
      });
  }
}
