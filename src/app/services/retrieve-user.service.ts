import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RetrieveUserService {
  constructor(private http: HttpClient) {}

  retrireveUser(token: string, id: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };

    return token !== null
      ? this.http
          .get(`${environment.apiUrl}/users`, httpOptions)
          .toPromise()
          .then((body: any) => {
            return body;
          })
      : this.http
          .get(`${environment.apiUrl}/users/${id}`)
          .toPromise()
          .then((body: any) => {
            return body;
          });
  }
}
