import { Field, InputType, Int } from "@nestjs/graphql";
import { IsOptional, MaxLength } from "class-validator";

@InputType()
export class NewExpenseInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(255)
  description?: string;

  @Field(() => Int)
  price: number;

  @Field({ nullable: true })
  @IsOptional()
  category: string;
}
