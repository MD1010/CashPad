import { Module } from "@nestjs/common";
import { DateScalar } from "../common/scalars/date.scalar";
import { ExpenseResolver } from "./expense.resolver";
import { ExpenseService } from "./expense.service";

@Module({
  providers: [ExpenseResolver, ExpenseService, DateScalar],
})
export class ExpenseModule {}
