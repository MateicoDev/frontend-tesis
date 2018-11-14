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
  loading = true;

  constructor(private expensesPrv: ExpensesProvider) {
  }

  ngOnInit() {
    this.expensesPrv.getExpenses().subscribe(
      (exp: any) => {
        this.loading = false;
        const { items } = exp['Expense per propertys'].items;
        if(!items || !items.length) return;
        const { expense } = items[0];
        if(!expense) return;
         this.expense = {
           total: expense.total_cost.toFixed(2)
         };
        },
        error1 => {
        console.error(error1)
    });
    this.expensesPrv.getExpenseSpendings().subscribe(
      (spendings: any) => {
        this.spends = spendings.Spending.items;
        let total = 0;
        this.spends.forEach(s => { total += s.total_price });
        total /= 12
        this.expense = {
          total: total.toFixed(2)
        };

      },
      error1 => {
        console.error(error1)
    })
  }

}
