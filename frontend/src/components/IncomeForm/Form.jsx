import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
import API from "../../Api/Axios";
import { plus } from "../../utils/Icons";

const Form = ({ fetchIncomes }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    date: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.amount || !formData.date) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await API.post("/add-income", formData);

      fetchIncomes();

      // Clear form
      setFormData({
        title: "",
        amount: "",
        date: null,
        category: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="input-control text-black">
        <input
          type="text"
          value={formData.title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleChange}
        />
      </div>
      <div className="input-control text-black">
        <input
          type="text"
          value={formData.amount}
          name={"amount"}
          placeholder="Salary Amount"
          onChange={handleChange}
        />
      </div>
      <div className="input-control text-black">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={formData.date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setFormData({ ...formData, date: date });
          }}
        ></DatePicker>
      </div>
      <div className="selects input-control flex justify-end text-black">
        <select
          name="category"
          value={formData.category}
          required
          id="category"
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investment</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={formData.description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleChange}
          className="border border-b"
        ></textarea>
      </div>
      <button type="submit" className="cursor-pointer">
        {plus}Add Income
      </button>
    </form>
  );
};

export default Form;
