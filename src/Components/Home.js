import React from "react";
import schwingen_img from "../Images/photofrombehind.png";

function Home() {
  return (
    <div className="h-screen bg-cover bg-no-repeat overflow-hidden flex justify-center items-center custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 mx-auto rounded-2xl overflow-hidden">
        <div className="flex flex-col justify-center items-center md:items-start md:ml-10 py-10">
          <div className="mb-4 text-center md:text-left">
            <h1 className="text-4xl">Willkommen, ich bin</h1>
            <h1 className="text-7xl font-medium text-sky-400 -ml-1">
              Damian Eisenring
            </h1>
          </div>
          <h1 className="text-3xl text-gray-400 text-center md:text-left">
            Web developer und Schwinger
          </h1>
        </div>
        <div className="flex justify-center content-center p-10">
          <img
            src={schwingen_img}
            className="w-3/5 rounded-3xl face"
            alt="Schwingen"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
