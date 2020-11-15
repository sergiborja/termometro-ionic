import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RetrieveUserService {
  constructor(private http: HttpClient) {}

  retrireveUser(token: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };

    return this.http
      .get(`${environment.apiUrl}/users`, httpOptions)
      .toPromise()
      .then((body: any) => {
        return body;
      });
  }
}
