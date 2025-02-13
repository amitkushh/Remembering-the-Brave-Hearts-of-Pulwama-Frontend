import React from "react";
import data from "../../../data.json";

function Soldier() {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((soldier, index) => (
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md border"
          key={index}
        >
          <img
            src={soldier.image}
            alt={soldier.name}
            className="rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-white">{soldier.name}</h3>
          <span className="text-white text-lg">{soldier.position}</span>
          <span className="text-white">{soldier.state}</span>
        </div>
      ))}
    </div>
  );
}

export default Soldier;
