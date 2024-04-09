import React from "react";

import schwingen_img from "../Images/IMG_E3935.png";

function Portrait() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col sm:flex-row items-center justify-center">
      {/* Unsure for the Background for this moment*/}
      <div className="absolute inset-0 bg-white bg-cover bg-no-repeat" />

      {/* Content */}
      <div className="relative z-10 w-full sm:w-3/4 mt-10 bg-gray-900 rounded-2xl text-gray-200 overflow-y-auto">
        <div className="h-auto flex flex-col sm:flex-row text-white mb-10 mt-10">
          <div className="w-full sm:w-1/2 ml-5 sm:ml-10 mb-5 sm:mb-0">
            <h1 className="text-3xl md:text-7xl text-white font-semibold ml-3 relative">
              Steckbrief
            </h1>
            <table className="mt-10 ml-3">
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
            src={schwingen_img}
            class=" h-96 ml-auto mr-5 sm:mr-10 mb-5 sm:mb-0 rounded-3xl face"
            alt="Bild vor dem Gang"
          />
        </div>

        <div className="h-50 bg-gray-200 text-black">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-opacity-20 border-white h-full border ml-3.5 md:ml-0 md:right-1/2 bg-white"></div>
            <div>
              <h1 className="text-3xl md:text-7xl text-gray-900 font-semibold ml-3 relative">
                Lebenslauf
              </h1>
            </div>
            <div className="my-10">
              <div className="mb-8 flex justify-between flex-row-reverse md:flex-row items-center w-full gap-2">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl py-1 rounded-full w-auto px-3">
                  <h1 className="mx-auto font-semibold lg:text-lg text-sm text-black">
                    2022 - Jetzt
                  </h1>
                </div>
                <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-black text-xl">IMS</h3>
                  <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
                    Informatikmittelschule in Aarau
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full gap-2">
                <div className="order-1 md:w-5/12"></div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline gap-2">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl py-1 rounded-full w-auto px-3">
                  <h1 className="mx-auto text-black font-semibold lg:text-lg text-smg">
                    2021
                  </h1>
                </div>
                <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-black text-xl">
                    Legon AG
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
                    Kurzpraktikum bei der Legon Ag
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse md:flex-row items-center w-full gap-2">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl py-1 rounded-full w-auto px-3">
                  <h1 className="mx-auto font-semibold text-black lg:text-lg text-sm">
                    2019 - 2022
                  </h1>
                </div>
                <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-black text-xl">
                    Bezirksschule
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
                    Besuchen der Bezirksschule in Schöftland (Aargau).
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse md:flex-row items-center w-full gap-2">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl py-1 rounded-full w-auto px-3">
                  <h1 className="mx-auto font-semibold text-black lg:text-lg text-sm">
                    2013 - 2019
                  </h1>
                </div>
                <div className="md:order-1 bg-white rounded-lg shadow-xl w-72 md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-black text-xl">
                    Primarschule
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">
                    Besuchen der Primarschule in Hirschthal (Aargau).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-gray-900 text-white">
          <div className="h-10" />
          <h1 className="text-3xl md:text-6xl text-white font-semibold ml-10 relative ">
            Jungschwingerkarriere
          </h1>
          <p className="ml-5 sm:ml-10 mt-10">
            Meine Jungschwinger Karriere begann im Jahr 2014, als ich zum
            erstenmal das Training mit meinem Bruder besucht habe, zu beginn
            packte mich das Schwingen nicht sehr und eine kurze Fussballkarriere
            kam zuvor. Aber im darauffolgenden Jahr packte mich das Schwingen
            trotzdem und meine Karriere startete am 28.06.2015 am
            BL.Kant.Jungschwingertag in Pratteln.
            <br />
            <br />
            Zu meinen grössten Erfolgen gehören dabei die 40 Zweige, sowie die
            Qualifikation für das Eidg. Schwingfest der Jungschwinger (ENST).
            Ebenfalls gehören sicherlich mehrfache Schlussgangqualifikationen
            dazu sowie einen Festsieg den ich feiern durfte.
          </p>
          {/* Jungschwinger */}
          <div className="">
            <div className="flex flex-col sm:flex-row justify-center mt-10">
              <div className="flex flex-col items-center mb-5 sm:mb-0">
                <p style={{ fontSize: "50px" }}>40</p>
                <p style={{ fontSize: "40px" }}>Zweige</p>
              </div>

              <div className="flex flex-col items-center ml-5 sm:ml-10">
                <p style={{ fontSize: "50px" }}>1</p>
                <p style={{ fontSize: "40px" }}>Festsiege</p>
              </div>
            </div>
          </div>
          <div className="h-10" />
        </div>
      </div>
    </div>
  );
}

export default Portrait;
