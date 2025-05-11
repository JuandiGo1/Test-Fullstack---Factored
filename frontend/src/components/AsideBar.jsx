import { useState } from "react";

const AsideBar = ({ technologies, onFilter }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  

  const handleCheckboxChange = (tech) => {
    const updatedTechnologies = selectedTechnologies.includes(tech)
      ? selectedTechnologies.filter((t) => t !== tech) // Quit if already selected
      : [...selectedTechnologies, tech]; 

    setSelectedTechnologies(updatedTechnologies);
    onFilter(updatedTechnologies);
  };

  return (
    <aside className="w-64 border-r-2 text-white p-4 shadow-md sticky top-0 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Filter by Technology</h2>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`tech-${index}`}
              value={tech}
              onChange={() => handleCheckboxChange(tech)}
              className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-2"
            />
            <label htmlFor={`tech-${index}`} className="text-sm">
              {tech}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideBar;
