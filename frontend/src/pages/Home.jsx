import { useState, useEffect, useCallback } from "react";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [msgInfo, setMsgInfo] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:3000/employees", {
          method: "GET",
        });
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleResults = useCallback((data) => {
    setSearchResult(data);
  }, []);

  const handleMsgInfo = useCallback((msg) => {
    setMsgInfo(msg);
  }, []);

  return (
    <div className="p-6 bg-gray-950 h-screen">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Employee Directory
      </h1>

      <SearchBar onResults={handleResults} setMsgInfo={handleMsgInfo} />

      {msgInfo && <p className="text-center text-white mt-4">{msgInfo}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mx-5 py-5">
        {(searchResult.length > 0 ? searchResult : employees).map((employee) => (
          <UserCard key={employee._id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
