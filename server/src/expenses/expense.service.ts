import { Injectable } from "@nestjs/common";
import { NewExpenseInput } from "./dto/new-expense.input";
import { ExpenseArgs } from "./dto/expense.args";
import { Expense } from "./models/expense.model";
import { randomUUID } from "crypto";

@Injectable()
export class ExpenseService {
  MOCK_DATA: Expense[] = [
    {
      id: "1",
      price: 115,
      category: "home",
      date: new Date(),
      title: "For cleaning the car",
    },
    {
      id: "2",
      price: 250,
      category: "car",
      date: new Date(),
      title: "Fue1",
    },
  ];

  async create(data: NewExpenseInput): Promise<Expense> {
    const newExpense: Expense = { ...data } as any;
    newExpense.id = randomUUID();
    this.MOCK_DATA.push(newExpense);
    return newExpense;
  }

  async findOneById(id: string): Promise<Expense> {
    return new Promise((res) => res(this.MOCK_DATA.find((x) => x.id === id)));
  }

  async findAll(recipesArgs: ExpenseArgs): Promise<Expense[]> {
    return this.MOCK_DATA as Expense[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
