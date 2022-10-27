import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={user?.photoURL}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold  text-success">Successfully Enrolled</h1>
            <h2 className="text-5xl font-bold">{user?.displayName}</h2>
            <p className="py-6 text-3xl">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
