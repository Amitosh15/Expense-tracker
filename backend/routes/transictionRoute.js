import {
  addExpense,
  deleteExpense,
  getExpense,
} from "../controllers/expenseController.js";
import {
  addIncome,
  deleteIncome,
  getIncome,
} from "../controllers/incomeController.js";
import { protect } from "../middleware/authMiddleware.js";

export default function transictionRoute(app) {
  app.post("/api/v1/add-income", protect, addIncome);
  app.get("/api/v1/get-income", protect, getIncome);
  app.delete("/api/v1/delete-income/:id", protect, deleteIncome);
  app.post("/api/v1/add-expenses", protect, addExpense);
  app.get("/api/v1/get-expenses", protect, getExpense);
  app.delete("/api/v1/delete-expense/:id", protect, deleteExpense);
}
