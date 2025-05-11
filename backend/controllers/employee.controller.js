import employeeModel from "../models/employee.model.js";

// Get all employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new employee
export const createEmployee = async (req, res) => {
  const { name, position, avatar, age, skills } = req.body;

  const newEmployee = new employeeModel({
    name,
    position,
    avatar,
    age,
    skills,
  });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single employee by name
export const getEmployeeByName = async (req, res) => {
  const { name } = req.params;

  try {
    const employees = await employeeModel.find({
      name: { $regex: name, $options: "i" },
    });

    if (employees.length === 0) {
      return res.status(404).json({ message: "No employees found with that name." });
    }

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an employee by ID
export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await employeeModel.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found." });
    }

    res.status(200).json({ message: "Employee deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all employees technologies
export const getAllTechnologies = async (req, res) => {
  try {
    const employees = await employeeModel.find();
    const allTechnologies = new Set();

    employees.forEach((employee) => {
      employee.skills.forEach((skill) => {
        allTechnologies.add(skill.name.toUpperCase());
      });
    });

    res.status(200).json(Array.from(allTechnologies));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};