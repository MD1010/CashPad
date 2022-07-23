import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ExpenseArgs } from "./dto/expense.args";
import { NewExpenseInput } from "./dto/new-expense.input";
import { ExpenseService } from "./expense.service";
import { Expense } from "./models/expense.model";

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly expensesService: ExpenseService) {}

  @Query(() => Expense)
  async expense(@Args("id") id: string): Promise<Expense> {
    const expense = await this.expensesService.findOneById(id);
    if (!expense) {
      throw new NotFoundException(id);
    }
    return expense;
  }

  @Query(() => [Expense])
  expenses(@Args() expensesArgs: ExpenseArgs): Promise<Expense[]> {
    return this.expensesService.findAll(expensesArgs);
  }

  @Mutation(() => Expense)
  async addExpense(@Args("newExpenseData") newExpenseData: NewExpenseInput): Promise<Expense> {
    const expense = await this.expensesService.create(newExpenseData);
    console.log(expense);

    return expense;
  }

  @Mutation(() => Boolean)
  async removeExpense(@Args("id") id: string) {
    return this.expensesService.remove(id);
  }
}
