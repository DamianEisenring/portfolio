import React from "react";
import schwingen_img from '../Images/Portrait_Placeholder.png';

function Portrait() {
  return (
    <div className="bg-schwingen_img4 h-screen bg-cover bg-no-repeat overflow-hidden grid place-items-center custom-scrollbar">
      <div className="rounded-xl bg-gray-900 h-3/4 w-1/2 flex items-center justify-center text-white">
        <div className="w-1/2 ml-10">
          <h2 className="text-left mt-4 mb-4">Steckbrief</h2>

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
                <td>Informatiker EFZ in Ausbildung an der Informatikmittelschule</td>
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
    </div>
  );
}

export default Portrait;
