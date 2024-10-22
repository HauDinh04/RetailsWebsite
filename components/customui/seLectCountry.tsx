import React from "react";

export const seLectCountry = () => {
  return (
    <div className="p-4">
      <label className="block text-sm font-medium text-gray-700">
        --Select Country--
      </label>
      <select className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="us">United States</option>
        <option value="vn">Vietnam</option>
        <option value="jp">Japan</option>
      </select>
    </div>
  );
};
