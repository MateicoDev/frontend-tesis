import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpensesProvider } from "../../providers/expenses/expenses";

@IonicPage()
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {

  spends;
  expense;

  constructor(private expensesPrv: ExpensesProvider) {
  }

  ngOnInit() {
    this.expensesPrv.getExpenses().subscribe(
      (exp: any) => {
         this.expense = {
           total: exp['Expense per propertys'].items[0].total_cost.toFixed(2)
         };
        },
        error1 => {
        console.error(error1)
    });
    this.expensesPrv.getExpenseSpendings().subscribe(
      (spendings: any) => {
        this.spends = spendings.Spending.items;
      },
      error1 => {
        console.error(error1)
    })
  }

}
