import PropTypes from "prop-types";

function Card({ user, array, setArray, edit }) {
  const handleDelete = () => {
    setArray(array.filter((item) => item.id !== user.id));
  };

  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-sm p-6 max-w-sm mx-auto hover:shadow-md transition-shadow duration-200 ">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1">
          Name: {user.name}
        </h3>
        <p className="text-sm text-gray-600">E-mail: {user.email}</p>
        <p className="text-sm text-gray-600">Role: {user.role}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-orange-500 text-white text-sm font-medium px-4 py-2 m-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          onClick={() => edit(user)}
        >
          Edit
        </button>
        <button
          className="bg-black text-white text-sm font-medium px-4 py-2 m-2 rounded-lg hover:bg-red-950 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  array: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  setArray: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default Card;
