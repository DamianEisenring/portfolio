import React from "react";

import schwingen_img from "../Images/Portrait_Placeholder.png";

//Logo imports
import cs_logo from "../Icons/cs_logo.png";
import database_logo from "../Icons/database_logo.png";
import firebase_logo from "../Icons/firebsae_logo.png";
import js_logo from "../Icons/js_logo.png";
import react_logo from "../Icons/react_logo.png";
import tailwind_logo from "../Icons/tailwind_logo.png";

function Informatik() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Unsure for the Background for this moment*/}
      <div className="absolute inset-0 bg-white bg-cover bg-no-repeat" />

      {/* Content */}
      <div className="relative z-10 h-full w-full md:w-1/2 bg-gray-900 mt-10 rounded-2xl text-gray-200 overflow-y-auto left-1/4">
        <div className="bg-gray-200">
          <div className="grid grid-cols-10 gap-x-1 gap-y-2">
            <h1
              className="text-black col-start-1 col-span-2 ml-10 mt-10"
              style={{ fontSize: "40px" }}
            >
              Meine Skills
            </h1>
            <div className="bg-gray-900 h-24 w-56 rounded-lg flex justify-center items-center gap-1 justify-self-end col-start-6 mt-10 mr-10">
              <img src={cs_logo} alt=".Net Logo" className="w-10 h-10" />
              <h1 className="text-lg font-bold">.Net</h1>
            </div>
            <div className="bg-gray-900 h-24 w-56 rounded-lg flex justify-center items-center gap-1 justify-self-end col-start-8 mt-10 mr-10">
              <img src={database_logo} alt=".Net Logo" className="w-10 h-10" />
              <h1 className="text-lg font-bold">SQL</h1>
            </div>
            <div className="bg-gray-900 h-24 w-56 rounded-lg flex justify-center items-center gap-1 justify-self-end col-start-10 mt-10 mr-10">
              <img src={firebase_logo} alt=".Net Logo" className="w-10 h-10" />
              <h1 className="text-lg font-bold">Firebase</h1>
            </div>
            <div className="bg-gray-900 h-24 w-56 rounded-lg flex justify-center items-center gap-1 justify-self-end col-start-6 mr-10">
              <img src={js_logo} alt=".Net Logo" className="w-10 h-10" />
              <h1 className="text-lg font-bold">Javascript</h1>
            </div>
            <div className="bg-gray-900 h-24 w-56 rounded-lg flex justify-center items-center gap-1 justify-self-end col-start-8 mr-10">
              <img src={react_logo} alt=".Net Logo" className="w-10 h-10" />
              <h1 className="text-lg font-bold">React.js</h1>
            </div>
            <div className="bg-gray-900 h-24 w-56 rounded-lg flex justify-center items-center gap-1 justify-self-end col-start-10 mr-10">
              <img src={tailwind_logo} alt=".Net Logo" className="w-10 h-10" />
              <h1 className="text-lg font-bold">Tailwind Css</h1>
            </div>
          </div>
          <div className="bg-gray-200 h-10"></div>
        </div>
        <div>
          <div className="bg-gradient-to-t from-gray-900 to-gray-200 h-5" />

          <h1 className="text-left ml-10" style={{ fontSize: "40px" }}>
            Meine Projekte
          </h1>
          <div className="h-1/2 w-auto text-white bg-gray-900 flex items-center">
            <h1 className="flex-1 text-white bg-gray-900 p-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </h1>
            <img
              src={schwingen_img}
              alt="placeholder"
              className="ml-auto mr-10"
            />
          </div>
          <div className="bg-gray-900 h-10"></div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-200 h-5" />

          <div className="h-1/2 flex items-center bg-gray-200">
            <img
              src={schwingen_img}
              alt="placeholder"
              className="mr-auto ml-10"
            />
            <h1 className="flex-1 text-black bg-gray-200 p-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </h1>
          </div>

          <div className="bg-gray-200 h-10"></div>

          <div className="bg-gradient-to-t from-gray-900 to-gray-200 h-5" />

          <div className="h-1/2 w-auto text-white flex items-center">
            <h1 className="flex-1 text-white p-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </h1>

            <img
              src={schwingen_img}
              alt="placeholder"
              className="ml-auto mr-10"
            />
          </div>

          <div className="bg-gray-900 h-20 mb-10" />
        </div>
      </div>
    </div>
  );
}

export default Informatik;
