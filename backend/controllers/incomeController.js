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

    res.status(201).json({ message: "Income added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getIncome = async (req, res) => {
  try {
    const incomes = await IncomeModel.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;

    const income = await IncomeModel.findByIdAndDelete(id);

    if (!income) {
      return res.status(404).json({ message: "Income not found" });
    }

    res.status(200).json({ message: "Income Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
