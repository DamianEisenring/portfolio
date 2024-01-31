import React from "react";

import schwingen_img from '../Images/Portrait_Placeholder.png';


function Informatik() {
    return (
      <div className="bg-schwingen_img4 h-screen bg-cover bg-no-repeat overflow-hidden grid place-items-center custom-scrollbar">
        <div className="h-full w-1/2 bg-gray-900 mt-10 rounded-2xl text-gray-200 overflow-y-auto">
          <div className="linear-gradient">
            <h1 className="text-center" style={{ fontSize: "40px" }}>
              Meine Projekte
            </h1>
          </div>
        <div className="bg-gradient-to-b from-gray-900 to-gray-200 h-5"/>
        <div className="h-1/2 w-auto text-black bg-gray-200 flex items-center">
            <h1 className="flex-1 text-black bg-gray-200 p-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </h1>
            <img
                src={schwingen_img}
                alt="placeholder"
                className="ml-auto mr-10"
            />
        </div>   
        <div className="bg-gradient-to-t from-gray-900 to-gray-200 h-5"/>
        <div className="h-1/2 flex items-center">
            <img
                src={schwingen_img}
                alt="placeholder"
                className="mr-auto ml-10"
            />
            <h1 className="flex-1 text-white bg-gray-900 p-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </h1>
        </div>
 
          <div className="bg-gradient-to-b from-gray-900 to-gray-200 h-5"/>
          <div className="h-1/2 w-auto text-black bg-gray-200 flex items-center ">
            <h1 className="flex-1 text-black bg-gray-00 p-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </h1>
            <img
            src={schwingen_img}
            alt="placeholder"
            className="ml-auto mr-10"
            />
          </div> 
        </div>
      </div>
    );
  }
  
  export default Informatik;
  