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
import { validate } from "../middleware/validateMiddleware.js";
import { addIncomeSchema } from "../validator/incomeValidator.js";
import { addExpenseSchema } from "../validator/expenseValidator.js";

export default function transictionRoute(app) {
  // Income
  app.post("/api/v1/add-income", validate(addIncomeSchema), protect, addIncome);
  app.get("/api/v1/get-income", protect, getIncome);
  app.delete("/api/v1/delete-income/:id", protect, deleteIncome);

  // Expenses
  app.post(
    "/api/v1/add-expenses",
    validate(addExpenseSchema),
    protect,
    addExpense,
  );
  app.get("/api/v1/get-expenses", protect, getExpense);
  app.delete("/api/v1/delete-expense/:id", protect, deleteExpense);
}
