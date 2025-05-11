import { useState, useEffect } from "react";

const SearchBar = ({ onResults, setMsgInfo }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchTerm.trim().length > 0) {
        try {
          const response = await fetch(
            `http://localhost:3000/employees/${searchTerm}`
          );
          if (!response.ok) {
            if (response.status === 404) {
              setMsgInfo("No results found.");
              return
            } else {
              throw new Error("Failed to fetch employees");
            }
          }
          const res = await response.json();
          setMsgInfo(res.length === 0 ? "No results found." : "");
          onResults(res);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setMsgInfo("Error searching employees");
        }
      } else {
        setMsgInfo("");
        onResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, onResults, setMsgInfo]);

  return (
    <form
      className="flex items-center max-w-sm "
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="w-full">
        <input
          type="text"
          id="simple-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-sm rounded-lg block w-full ps-5 p-2.5  bg-gray-100 border-2 border-white placeholder-gray-400 text-gray-950 focus:outline-none"
          placeholder="Search employee..."
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white rounded-lg border border-blue-700 focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
