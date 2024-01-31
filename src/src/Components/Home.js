import React from 'react';

import schwingen_img from '../Images/Portrait_Placeholder.png';

function Home() {
  return (
    <div className="bg-schwingen_img4 h-screen bg-cover bg-no-repeat overflow-hidden grid place-items-center custom-scrollbar">
      <div className='rounded-xl backdrop-blur-sm h-1/2 bg-no-repeat w-1/2 flex items-center'>
        <h1 className="text-white text-4xl flex-grow-0">
        Resist the slave mind.
        <br/>
        <br/>
         - Andrew Tate
        </h1>
        <img
        className="rounded-full w-96 h-96 ml-auto" 
        src={schwingen_img} 
        alt="Schwingbild" />
      </div>
    </div>
  );
}

export default Home;
