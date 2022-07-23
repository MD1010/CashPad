import { Directive, Field, ID, ObjectType, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class Expense {
  @Field(() => ID)
  id: string;

  @Directive("@upper")
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ defaultValue: new Date() })
  date: Date;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  category?: string;
}
