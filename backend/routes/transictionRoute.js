import {
  addIncome,
  deleteIncome,
  getIncome,
} from "../controllers/incomeController.js";

export default function transictionRoute(app) {
  app.post("/api/v1/add-income", addIncome);
  app.get("/api/v1/get-income", getIncome);
  app.delete("/api/v1/delete-income/:id", deleteIncome);
}
