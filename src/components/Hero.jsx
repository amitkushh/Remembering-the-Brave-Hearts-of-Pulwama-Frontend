import React from "react";

function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20 md:px-20">
        <h1 className="text-white text-center text-4xl font-extrabold leading-tight md:text-5xl md:max-w-[800px] md:leading-[130%] lg:text-6xl lg:max-w-[900px] lg:leading-[120%]">
          Remembering the Brave Hearts of Pulwama🕯️
        </h1>
        <p className="italic text-white text-center text-xl font-semibold mt-5">
          February 14, 2019
        </p>
        <p className="italic text-white text-center text-xl font-semibold mt-5 max-w-[250px]">
          कुछ याद उन्हें भी कर लो जो लौट कर घर न आएं।
        </p>
      </div>
    </>
  );
}

export default Hero;
