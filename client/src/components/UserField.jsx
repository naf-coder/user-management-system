import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function UserField({ user, setUser, toEdit, setUserToEdit }) {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toEdit == null) {
      setUser([...user, { ...formData, id: Date.now() }]);
    } else {
      setUser(
        user.map((item) => {
          return item.id === toEdit.id ? { ...item, ...formData } : item;
        })
      );
      setUserToEdit(null);
    }
  };

  useEffect(() => {
    if (toEdit) {
      setFormData(toEdit);
    }
  }, [toEdit]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center rounded-lg shadow-lg p-6 max-w-sm mx-auto"
      >
        <label className="flex flex-col gap-2">
          <span className="text-lg font-medium">Name:</span>
          <input
            value={formData.name}
            type="text"
            placeholder="Enter your name"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-lg font-medium">E-mail:</span>
          <input
            value={formData.email}
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-lg font-medium">Role:</span>
          <input
            value={formData.role}
            type="text"
            placeholder="Enter your role"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </label>
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="bg-orange-700 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition"
          >
            {toEdit == null ? `Add User` : `Update User`}
          </button>
        </div>
      </form>
    </>
  );
}

UserField.propTypes = {
  user: PropTypes.array, // `user` should be an array
  setUser: PropTypes.func, // `setUser` should be a function
  toEdit: PropTypes.object, // `toEdit` should be an object
  setUserToEdit: PropTypes.func, // `setUserToEdit` should be a function
};

export default UserField;
