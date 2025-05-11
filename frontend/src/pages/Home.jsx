import { useState, useEffect, useCallback } from "react";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import AsideBar from "../components/AsideBar";
import factoredLogo from "../assets/factored.svg";
import CreateEmployee from "./CreateEmployee";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [msgInfo, setMsgInfo] = useState("");
  const [page, setPage] = useState("home");

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

    const fetchTechs = async () => {
      try {
        const response = await fetch("http://localhost:3000/employees/techs", {
          method: "GET",
        });
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchEmployees();
    fetchTechs();
  }, []);

  const handleResults = useCallback((data) => {
    setSearchResult(data);
  }, []);

  const handleMsgInfo = useCallback((msg) => {
    setMsgInfo(msg);
  }, []);

  const handleFilter = (selectedTechnologies) => {
    const filteredEmployees = employees.filter((employee) =>
      employee.skills.some((skill) =>
        selectedTechnologies.some((tech) => tech === skill.name.toUpperCase())
      )
    );
    setSearchResult(filteredEmployees);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col h-screen  bg-gray-950 overflow-auto">
      <div className="flex items-center p-6 mt-2 border-b-2 border-white justify-between w-full h-16 bg-gray-950 shadow-md ">
        <div className="flex items-center justify-center w-50 h-auto mr-2">
          <img src={factoredLogo} alt="Factored Logo" />
        </div>
        <div className="text-white text-sm">By Juan Maestre</div>
        <h1 className="text-3xl font-bold text-white text-center my-6">
          Employee Directory
        </h1>
      </div>

      <div className="flex gap-1">
        <AsideBar technologies={technologies} onFilter={handleFilter} />
        <div className="flex-1 flex flex-col mt-5 py-5">
          <div className="px-6">
            {page === "home" ? (
              <>
                <div className="flex w-full items-center justify-between">
                  <button
                    onClick={()=> handlePageChange("create")}
                    type="button"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-white hover:text-black cursor-pointer transition duration-300 transform hover:scale-105"
                  >
                    Add Employee
                  </button>
                  <SearchBar
                    onResults={handleResults}
                    setMsgInfo={handleMsgInfo}
                  />
                </div>

                {msgInfo && (
                  <p className="text-center text-white mt-4">{msgInfo}</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                  {(searchResult.length > 0 ? searchResult : employees).map(
                    (employee) => (
                      <UserCard key={employee._id} employee={employee} />
                    )
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <button
                    onClick={()=> handlePageChange("home")}
                    type="button"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-white hover:text-black cursor-pointer transition duration-300 transform hover:scale-105"
                  >
                    ← Back
                  </button>
                  <h1 className="text-white text-3xl font-bold  mx-auto">Add an Employee</h1>
                </div>

                <CreateEmployee/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
