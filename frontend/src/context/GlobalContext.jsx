import React, { useContext, useState } from "react";
import { getIncome, getExpenses as getExpensesUrl } from "../Api/Axios"; // Assuming getExpense exists similarly

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const getIncomes = async () => {
    try {
      const response = await getIncome();
      setIncomes(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const getExpenses = async () => {
    try {
      // Assuming you have a getExpense function in your Api/Axios
      const response = await getExpensesUrl();
      setExpenses(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  const totalExpenses = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.amount;
    });

    return total;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history;
  };

  return (
    <GlobalContext.Provider
      value={{
        incomes,
        expenses,
        getIncomes,
        getExpenses,
        error,
        setError,
        totalIncome,
        totalExpenses,
        totalBalance,
        transactionHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
