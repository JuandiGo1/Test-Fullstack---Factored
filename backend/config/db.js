import dotenv from "dotenv";
import multiavatar from "@multiavatar/multiavatar/esm";
import Employee from "../models/employee.model.js";
import mongoose from "mongoose";
import { technologies, names, positions } from "../config/data_to_populate.js";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://mongo:27017/employees");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Failed to connect with MongoDB: ${error.message}`);
    process.exit(1);
  }
};

const getRandomSkills = () => {
  const shuffled = technologies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5).map((tech) => ({
    name: tech,
    rating: Math.floor(Math.random() * 10) + 1, // Rating 1-10
  }));
};

const seedDatabase= async () => {
  try {
    // Connect to DB
    await connectDB();

    // If BD is empty, populate it
    const existingEmployees = await Employee.countDocuments();
    if (existingEmployees > 0) {
      console.log(
        "The database already contains employees. The operation will not be performed."
      );
      return;
    }

    console.log("No employees found. Populating the database...");

    // Generate employees
    const employees = [];
    for (let i = 0; i <20; i++) {
      const name = names[i];
      const position = positions[i];
      const email = `${name.toLowerCase().replace(/ /g, ".")}@factored.ai`;
      const avatar = multiavatar(name);
      const skills = getRandomSkills();

      employees.push({ name, position, email, avatar, skills });
    }

    // Insert employees into the database
    await Employee.insertMany(employees);
    console.log("20 employees added to the database");
  } catch (error) {
    console.error(`Error populating the database: ${error.message}`);
  }
};

export default seedDatabase;