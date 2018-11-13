import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from "../../app/utils/const.util";

@Injectable()
export class UsersProvider {

  userEndpoint = `${API_ENDPOINT}/users/`;
  loginEndpoint = `${API_ENDPOINT}/login/`;
  currentUser;
  users;

  constructor(public http: HttpClient) {
  }

  getUsers() {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
    return this.http.get<any>(this.userEndpoint, { headers: headers });
  }

  login(user: {user_email: string, user_password}) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
    return this.http.post(this.loginEndpoint, user, { headers: headers });
  }
}
