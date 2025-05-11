import { useState } from "react";
import multiavatar from "@multiavatar/multiavatar/esm";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [skills, setSkills] = useState([]);

  const [skillInput, setSkillInput] = useState("");
  const [ratingInput, setRatingInput] = useState(1);
  const [error, setError] = useState("");

  const handleAddSkill = () => {
    if (skillInput.trim() === "") {
      setError("Skill name cannot be empty.");
      return;
    }

    if (ratingInput < 1 || ratingInput > 10) {
      setError("Rating must be between 1 and 10.");
      return;
    }

    if (skills.length >= 10) {
      setError("You can add up to 10 skills only.");
      return;
    }

    setSkills([...skills, { name: skillInput, rating: ratingInput }]); // Default rating of 5
    setSkillInput("");
    setError("");
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleAvatarChange = (e) => {
    setName(e.target.value);
    const svgAvatar = multiavatar(name);
    setAvatar(svgAvatar);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (skills.length < 5) {
      setError("You must add at least 5 skills.");
      return;
    }

    const newEmployee = {
      name,
      position,
      email,
      avatar,
      skills,
    };

    try {
      const response = await fetch("http://localhost:3000/employees/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) {
        throw new Error("Failed to create employee");
      }

      alert("Employee created successfully!");
      setName("");
      setPosition("");
      setEmail("");
      setAvatar("");
      setSkills([]);
    } catch (error) {
      console.error(error);
      setError("Failed to create employee. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Employee</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        {avatar ? (
            <div
          className="w-20 h-20 mx-auto mb-4"
          dangerouslySetInnerHTML={{ __html: avatar }}
        />
        ):(
            <div
          className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center"
          
        />
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleAvatarChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Skills</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="flex-1 p-2 border border-gray-600 rounded bg-gray-900 text-white"
              placeholder="Add a skill"
            />
            <input
              type="number"
              value={ratingInput}
              onChange={(e) => setRatingInput(Number(e.target.value))}
              className="w-20 p-2 border border-gray-600 rounded bg-gray-900 text-white"
              placeholder="Rating"
              min="1"
              max="10"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="list-disc list-inside text-sm">
            {skills.map((skill, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex w-full  items-center justify-between mr-1">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-400"> (Rating: {skill.rating})</span>
                </div>
                
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
