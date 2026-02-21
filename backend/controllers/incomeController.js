import IncomeModel from "../models/IncomeModel.js";

export const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  // Instance
  const income = IncomeModel({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // Validation
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || amount === "number") {
      return res.status(400).json({ message: "Amount must be a positive " });
    }
    await income.save();
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
