import React from "react";

import schwingen_img from "../Images/Portrait_Placeholder.png";

function Portrait() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center ">
      {/* Unsure for the Background for this moment*/}
      <div className="absolute inset-0 bg-white bg-cover bg-no-repeat" />

      {/* Content */}

      <div className="relative z-10 h-full w-3/4 mt-10 bg-gray-900 rounded-2xl text-gray-200 overflow-y-auto ">
        <div className="h-auto flex text-white mb-10 mt-10">
          <div className="w-1/2 ml-10 ">
            <h2 className="text-left mt-4 mb-4" style={{ fontSize: "40px" }}>
              Steckbrief
            </h2>

            <table className="mt-4">
              <tbody>
                <tr>
                  <td className="pr-4">Name:</td>
                  <td>Eisenring</td>
                </tr>
                <tr>
                  <td className="pr-4">Vorname:</td>
                  <td>Damian</td>
                </tr>
                <tr>
                  <td className="pr-4">Geburtsdatum:</td>
                  <td>20.07.2006</td>
                </tr>
                <tr>
                  <td className="pr-4">Grösse:</td>
                  <td>196cm</td>
                </tr>
                <tr>
                  <td className="pr-4">Gewicht:</td>
                  <td>100kg</td>
                </tr>
                <tr>
                  <td className="pr-4">Beruf:</td>
                  <td>
                    Informatiker EFZ in Ausbildung an der Informatikmittelschule
                  </td>
                </tr>
                <tr>
                  <td className="pr-4">Adresse:</td>
                  <td>Rebackerstrasse 13, 5042 Hirschthal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <img
            className="rounded-full w-96 h-96 ml-auto mr-10"
            src={schwingen_img}
            alt="Schwingbild"
          />
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-gray-200 h-5" />

        <div className="bg-gray-200 text-black">
          <div className="">
            <h2 className="ml-10" style={{ fontSize: "25px" }}>
              Jungschwinger-Karriere
            </h2>
            <p className="ml-10">
              Meine Jungschwinger Karriere begann im Jahr 2014, als ich zum
              erstenmal das Training mit meinem Bruder besucht habe, zu beginn
              packte mich das Schwingen nicht sehr und eine kurze
              Fussballkarriere kam zuvor. Aber im darauffolgenden Jahr packte
              mich das Schwingen trotzdem und meine Karriere startete am
              28.06.2015 am BL.Kant.Jungschwingertag in Pratteln.
              <br />
              <br />
              Zu meinen grössten Erfolgen gehören dabei die 40 Zweige, sowie die
              Qualifikation für das Eidg. Schwingfest der Jungschwinger (ENST).
              Ebenfalls gehören sicherlich mehrfache Schlussgangqualifikationen
              dazu sowie einen Festsieg den ich feiern durfte.
            </p>
          </div>
          {/*Jungschwinger*/}
          <div className="">
            <div className="flex justify-center mt-10">
              <div className="flex flex-col items-center mr-10">
                <p style={{ fontSize: "50px" }}>40</p>
                <p style={{ fontSize: "40px" }}>Zweige</p>
              </div>

              <div className="flex flex-col items-center ml-10">
                <p style={{ fontSize: "50px" }}>1</p>
                <p style={{ fontSize: "40px" }}>Festsiege</p>
              </div>
            </div>
          </div>
          <div className="h-20" />
        </div>
      </div>
    </div>
  );
}

export default Portrait;
