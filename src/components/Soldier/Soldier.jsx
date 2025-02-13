import React from "react";

function Soldier() {
  const soldiers = [
    {
      name: "Captain Saurabh Kalia",
      rank: "Captain",
      state: "(Gujrat)",
    },
    {
      name: "Captain Nikesh Kalia",
      rank: "Captain",
      state: "(Bihar)",
    },
  ];

  return (
    <div className="grid grid-cols-1 justify-center items-center gap-5 lg:grid-cols-3">
      {soldiers.map((soldier, index) => (
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md border"
          key={index}
        >
          <h3 className="text-2xl font-semibold text-white">{soldier.name}</h3>
          <span className="text-white text-lg">{soldier.rank}</span>
          <span className="text-white">{soldier.state}</span>
          <button className="bg-white w-full py-2 px-8 text-lg rounded-md mt-4">
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default Soldier;
