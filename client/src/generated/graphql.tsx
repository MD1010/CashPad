import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Expense = {
  __typename?: 'Expense';
  category?: Maybe<Scalars['String']>;
  date: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addExpense: Expense;
  removeExpense: Scalars['Boolean'];
};


export type MutationAddExpenseArgs = {
  newExpenseData: NewExpenseInput;
};


export type MutationRemoveExpenseArgs = {
  id: Scalars['String'];
};

export type NewExpenseInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  expense: Expense;
  expenses: Array<Expense>;
};


export type QueryExpenseArgs = {
  id: Scalars['String'];
};


export type QueryExpensesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type AddExpenseMutationVariables = Exact<{
  title: Scalars['String'];
  price: Scalars['Int'];
}>;


export type AddExpenseMutation = { __typename?: 'Mutation', addExpense: { __typename?: 'Expense', id: string, description?: string | null, date: any, price: number, category?: string | null } };

export type ExpensesQueryVariables = Exact<{ [key: string]: never; }>;


export type ExpensesQuery = { __typename?: 'Query', expenses: Array<{ __typename?: 'Expense', id: string, category?: string | null }> };


export const AddExpenseDocument = gql`
    mutation AddExpense($title: String!, $price: Int!) {
  addExpense(newExpenseData: {title: $title, price: $price}) {
    id
    description
    date
    price
    category
  }
}
    `;
export type AddExpenseMutationFn = Apollo.MutationFunction<AddExpenseMutation, AddExpenseMutationVariables>;

/**
 * __useAddExpenseMutation__
 *
 * To run a mutation, you first call `useAddExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addExpenseMutation, { data, loading, error }] = useAddExpenseMutation({
 *   variables: {
 *      title: // value for 'title'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useAddExpenseMutation(baseOptions?: Apollo.MutationHookOptions<AddExpenseMutation, AddExpenseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddExpenseMutation, AddExpenseMutationVariables>(AddExpenseDocument, options);
      }
export type AddExpenseMutationHookResult = ReturnType<typeof useAddExpenseMutation>;
export type AddExpenseMutationResult = Apollo.MutationResult<AddExpenseMutation>;
export type AddExpenseMutationOptions = Apollo.BaseMutationOptions<AddExpenseMutation, AddExpenseMutationVariables>;
export const ExpensesDocument = gql`
    query Expenses {
  expenses {
    id
    category
  }
}
    `;

/**
 * __useExpensesQuery__
 *
 * To run a query within a React component, call `useExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpensesQuery({
 *   variables: {
 *   },
 * });
 */
export function useExpensesQuery(baseOptions?: Apollo.QueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, options);
      }
export function useExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, options);
        }
export type ExpensesQueryHookResult = ReturnType<typeof useExpensesQuery>;
export type ExpensesLazyQueryHookResult = ReturnType<typeof useExpensesLazyQuery>;
export type ExpensesQueryResult = Apollo.QueryResult<ExpensesQuery, ExpensesQueryVariables>;