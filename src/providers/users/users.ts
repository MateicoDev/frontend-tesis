import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from "../../app/utils/const.util";

@Injectable()
export class UsersProvider {

  apiEndpoint = `${API_ENDPOINT}/users`;
  currentUser;
  users;

  constructor(public http: HttpClient) {
  }

  getUsers() {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
    return this.http.get(this.apiEndpoint, { headers: headers });
  }
}
