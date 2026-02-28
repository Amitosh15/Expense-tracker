import { useEffect, useState } from "react";
import "../../styles/global.css";
import Form from "../IncomeForm/Form";
import API from "../../Api/Axios";
import "./Income.css";
import { calender, comment, trash } from "../../utils/Icons";
import { categoryConfig } from "../CategoryConfig/categoryConfig";

const Income = () => {
  const [incomes, setIncomes] = useState([]);

  // Get income
  const fetchIncomes = async () => {
    try {
      const res = await API.get("/get-income");
      setIncomes(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchIncomes();
  }, []);

  // Delete income
  const handleDelete = async (id) => {
    try {
      await API.delete(`/delete-income/${id}`);
      setIncomes(incomes.filter((income) => income._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  return (
    <div className="container overflow-y-auto">
      <h1 className="text-2xl">Incomes</h1>
      <h2 className="total-income flex justify-center items-center bg-[#FC6F9] rounded-[20px]">
        Total Income: <span>₹{totalIncome()}</span>
      </h2>
      <div className="income-content flex items-start gap-4">
        {/* Form container */}
        <div className="form-container">
          <Form fetchIncomes={fetchIncomes} />
        </div>
        {/* Income  */}
        <div className="incomes flex-1">
          {incomes.map((income) => {
            const { _id, title, amount, date, category, description } = income;
            // console.log(income);
            return (
              <div
                key={_id}
                className="income-con flex items-center gap-4 bg-[#FCF6F9] rounded-[20px]"
              >
                <div className="icon w-20 h-20 rounded-[20px] bg-[#F5F5F5] flex items-center justify-center">
                  {categoryConfig[category]}
                </div>
                <div className="content flex flex-col gap-1 w-full">
                  {/* Title */}
                  <h5 className="text-[1.3rem] text-[#222260]">{title}</h5>
                  {/* Text content */}
                  <div className="inner-content">
                    <p>₹ {amount}</p>
                    <p>
                      {calender} {new Date(date).toLocaleDateString("en-IN")}
                    </p>
                    <p>
                      {comment} {description}
                    </p>
                    {/* Button */}
                    <div className="delete-btn">
                      <button onClick={() => handleDelete(_id)}>{trash}</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Income;
