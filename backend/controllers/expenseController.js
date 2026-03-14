import ExpenseModel from "../models/ExpenseModel.js";

// Add
export const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  // Instance
  const income = ExpenseModel({
    title,
    amount,
    category,
    description,
    date,
    user: req.user,
  });

  try {
    // Validation
    if (!title || !amount || !category || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || amount === "number") {
      return res.status(400).json({ message: "Amount must be a positive " });
    }
    await income.save();

    res.status(201).json({ message: "Expense added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get
export const getExpense = async (req, res) => {
  try {
    const incomes = await ExpenseModel.find({ user: req.user }).sort({
      createdAt: -1,
    });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await ExpenseModel.findByIdAndDelete({
      _id: id,
      user: req.user,
    });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
