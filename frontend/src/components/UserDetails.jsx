import RadarChart from "./RadarChart";

const UserDetails = ({ employee, onClose }) => {
  return (
    <div
      className="fixed inset-0  bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-gray-900 border-2 border-gray-600 text-white rounded-xl shadow-lg w-200 p-6 relative">
        <button
          onClick={onClose}
          className="absolute bg-blue-50 rounded-full px-2 top-2 right-2 text-red-700 hover:text-white hover:bg-red-600 cursor-pointer"
        >
          ✕
        </button>
        <div
          className="w-24 h-24 mx-auto mb-4"
          dangerouslySetInnerHTML={{ __html: employee.avatar }}
        />
        <h2 className="text-2xl font-bold text-center mb-2">{employee.name}</h2>
        <p className="text-center text-gray-200 mb-4">{employee.position}</p>
        <div className="flex items-center justify-between gap-2">
          <div className="w-1/2 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Skills:</h3>
            <ul className="list-none text-gray-200">
              {employee.skills.map((skill, index) => (
                <li key={index}>
                  {skill.name} - {skill.rating}/10
                </li>
              ))}
            </ul>
          </div>
          {console.log(employee.skills)}
          <div className="w-1/2 h-1/2">
              <RadarChart data={employee.skills} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
