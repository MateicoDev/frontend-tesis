import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from "../../app/utils/const.util";

@Injectable()
export class ExpensesProvider {

  constructor(public http: HttpClient) {
  }

  getExpenses() {
    return this.http.get(`${API_ENDPOINT}/expenses/property/2`);
  }

  getExpenseSpendings() {
    return this.http.get(`${API_ENDPOINT}/expenses/spendings?id_partnership=1&month=11&year=2018`);
  }

}
