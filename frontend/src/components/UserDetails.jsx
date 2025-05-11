import RadarChart from "./RadarChart";

const UserDetails = ({ employee, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0  bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-200 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          ✕
        </button>
        <div
          className="w-24 h-24 mx-auto mb-4"
          dangerouslySetInnerHTML={{ __html: employee.avatar }}
        />
        <h2 className="text-2xl font-bold text-center mb-2">{employee.name}</h2>
        <p className="text-center text-gray-600 mb-4">{employee.position}</p>
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills:</h3>
            <ul className="list-disc list-inside text-gray-700">
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
