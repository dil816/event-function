import React from "react";

const EventTable = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[250px]">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Event Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Start Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Start Time
                </th>
                <th scope="col" className="py-3 px-6">
                  Description
                </th>
                <th scope="col" className="py-3 px-6">
                  Poster
                </th>
                <th scope="col" className="py-3 px-6">
                  Location
                </th>
                <th scope="col" className="py-3 px-6">
                  Event Type
                </th>
                <th scope="col" className="py-3 px-6">
                  Edit
                </th>
                <th scope="col" className="py-3 px-6">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">01</td>
                <td className="py-4 px-6">Mega Launch</td>
                <td className="py-4 px-6">Sep 10 2024</td>
                <td className="py-4 px-6">10.00 AM</td>
                <td className="py-4 px-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium sed ex aspernatur
                </td>
                <td className="py-4 px-6">poster.png</td>
                <td className="py-4 px-6">Gall face</td>
                <td className="py-4 px-6">ceremoney</td>
                <td className="py-4 px-6">
                  <button className="btn btn-outline btn-error">Edit</button>
                </td>
                <td className="py-4 px-6">
                  <button className="btn btn-outline btn-error">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EventTable;
