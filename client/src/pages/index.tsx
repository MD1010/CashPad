import { useExpensesQuery, Expense } from "generated/graphql";
import { useEffect } from "react";

const Index = () => {
  const { data, error, loading } = useExpensesQuery();
  useEffect(() => {
    if (error) console.error(error);
    if (loading) console.log("loading...");
  }, [error, loading]);

  return data ? (
    <div>
      {data?.expenses.map((x) => (
        <>
          <div>id: {x.id}</div>
          <div>category: {x.category}</div>
        </>
      ))}
    </div>
  ) : null;
};

export default Index;
