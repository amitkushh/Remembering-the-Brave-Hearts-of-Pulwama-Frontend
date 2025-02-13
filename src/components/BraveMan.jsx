import React from "react";
import Soldier from "../components/Soldier/Soldier";

function BraveMan() {
  return (
    <div className="mx-7 mb-16 flex flex-col justify-center items-center md:px-20">
      <div>
        <h2 className="text-white mb-9 text-3xl font-bold ">
          Martyrs of Pulwama
        </h2>
      </div>
      <Soldier />
    </div>
  );
}

export default BraveMan;
