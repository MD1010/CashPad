import { Directive, Field, ID, Int, ObjectType } from "@nestjs/graphql";

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
