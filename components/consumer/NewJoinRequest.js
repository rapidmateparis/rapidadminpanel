import React from "react";

function NewJoinRequestPage() {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">User Information</h2>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <div>
          <div className="mb-4">
            <p className="mt-2 font-semibold text-black">Account Type: <span className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-success text-success">Pickup & Dropoff</span></p>
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <p className="text-sm font-regular text-black">Full Name</p>
              <h5 className="text-lg font-semibold text-black">John Doe</h5>
            </div>
            <div className="mb-4">
              <p className="text-sm font-regular text-black">Email</p>
              <h5 className="text-lg font-semibold text-black">johndoe@example.com</h5>
            </div>
            <div className="mb-4">
              <p className="text-sm font-regular text-black">Password</p>
              <h5 className="text-lg font-semibold text-black">********</h5>
            </div>
            <div className="mb-4">
              <p className="text-sm font-regular text-black">Phone</p>
              <h5 className="text-lg font-semibold text-black">+123456789</h5>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="text-sm font-regular text-black">Country</p>
              <h5 className="text-lg font-semibold text-black">United States</h5>
            </div>
            <div className="mb-4">
              <p className="text-sm font-regular text-black">Account For</p>
              <h5 className="text-lg font-semibold text-black">Personal Use</h5>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">Accept</button>
          <div className="flex space-x-4">
            <button className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition">Ignore</button>
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewJoinRequestPage;
