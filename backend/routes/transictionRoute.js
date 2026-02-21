import { addIncome } from "../controllers/incomeController.js";

export default function transictionRoute(app) {
  app.post("/api/v1/add-income", addIncome);
}
