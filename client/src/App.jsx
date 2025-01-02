import UserField from "./components/UserField";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  return (
    <>
      <main className="min-h-screen w-full bg-gray-100">
        <h1 className="text-3xl text-center text-black font-serif my-6">
          User Management System
        </h1>
        <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center font-serif">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
            <div className="w-full max-w-md p-4 rounded-lg">
              <UserField
                user={userData}
                setUser={setUserData}
                toEdit={userToEdit}
                setUserToEdit={setUserToEdit}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-grow m-10">
            <div className="w-full h-[90vh] bg-white border border-gray-300 rounded-lg shadow-lg overflow-y-auto py-2 ">
              {userData.length > 0 ? (
                <div className="flex flex-wrap gap-4 justify-center">
                  {userData.map((item) => (
                    <Card
                      user={item}
                      key={item.id}
                      array={userData}
                      setArray={setUserData}
                      edit={setUserToEdit}
                      toEdit={userToEdit}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">No users available.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
