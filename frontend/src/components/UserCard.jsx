const UserCard = ({ employee }) => {
  return (
    <div className="group p-4 border border-gray-300 rounded-3xl shadow-md bg-black text-white hover:border-blue-600 transition duration-300 hover:bg-[#141414] transform hover:scale-105 cursor-pointer">
      <div
        className="w-20 h-20 mx-auto mb-4"
        dangerouslySetInnerHTML={{ __html: employee.avatar }}
      />

      <h2 className="text-lg font-bold text-center">{employee.name}</h2>
      <p className="text-center text-gray-300">{employee.position}</p>
      <div className="mt-4 flex flex-col items-center">
        <h3 className="text-sm font-semibold">Skills:</h3>
        <ul className="list-none flex flex-wrap gap-2 items-center justify-center text-sm text-gray-600">
          {employee.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-800 text-white rounded-full px-2 py-1 m-1"
            >
              {skill.name}
            </li>
          ))}
        </ul>
        <button class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          View more
        </button>
      </div>
    </div>
  );
};

export default UserCard;
