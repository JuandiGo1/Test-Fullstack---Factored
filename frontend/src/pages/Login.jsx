import factoredLogo from "../assets/factored.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please enter a username");
      return;
    }
    localStorage.setItem("username", username);
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-3 bg-gray-950">
      <div className="p-8 rounded-lg shadow-md w-80 border border-white">
        <div className="flex items-center justify-center w-full h-auto mb-6">
          <img src={factoredLogo} alt="Factored Logo" />
        </div>
        <h1 className="text-2xl font-medium text-center mb-6 text-white">
          Login with Username
        </h1>
        <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="p-2 border border-gray-300 rounded text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-white hover:text-black cursor-pointer transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
