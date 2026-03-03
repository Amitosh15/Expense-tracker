import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const addIncome = (formData) => API.post("/add-income", formData);
export const getIncome = () => API.get("/get-income");
export const deleteIncome = (id) => API.delete(`/delete-income/${id}`);
export const addExpenses = (formData) => API.post("/add-expenses", formData);
export const getExpenses = () => API.get("/get-expenses");
export const deleteExpenses = (id) => API.delete(`/delete-expense/${id}`);

export default API;
