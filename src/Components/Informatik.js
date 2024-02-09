import React from "react";

//Mockup Import for Projects
import Stormguard_mockup from "../Images/Stormguard_mockup.png";
import ScheduleSphere_mockup from "../Images/ScheduleSphere_mockup.png";
import plauderpinguin_mockup from "../Images/bildformockup-portrait.png";

//Logo imports
import cs_logo from "../Icons/cs_logo.png";
import database_logo from "../Icons/database_logo.png";
import firebase_logo from "../Icons/firebsae_logo.png";
import js_logo from "../Icons/js_logo.png";
import react_logo from "../Icons/react_logo.png";
import tailwind_logo from "../Icons/tailwind_logo.png";

function Informatik() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-white bg-cover bg-no-repeat" />
      <div className="relative z-10 h-full w-3/4 ml-1/8 bg-gray-900 mt-10 rounded-2xl text-gray-200 overflow-y-auto">
      <div className="bg-gray-200 p-8">
  <div className="flex flex-col">
    <h1
      className="text-black ml-10 mt-10"
      style={{ fontSize: "40px" }}
    >
      Meine Skills
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <div className="bg-gray-900 h-24 rounded-lg flex justify-center items-center gap-1">
        <img src={cs_logo} alt=".Net Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">.Net</h1>
      </div>
      <div className="bg-gray-900 h-24 rounded-lg flex justify-center items-center gap-1">
        <img src={database_logo} alt=".Net Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">SQL</h1>
      </div>
      <div className="bg-gray-900 h-24 rounded-lg flex justify-center items-center gap-1">
        <img src={firebase_logo} alt=".Net Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">Firebase</h1>
      </div>
      <div className="bg-gray-900 h-24 rounded-lg flex justify-center items-center gap-1">
        <img src={js_logo} alt=".Net Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">Javascript</h1>
      </div>
      <div className="bg-gray-900 h-24 rounded-lg flex justify-center items-center gap-1">
        <img src={react_logo} alt=".Net Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">React.js</h1>
      </div>
      <div className="bg-gray-900 h-24 rounded-lg flex justify-center items-center gap-1">
        <img src={tailwind_logo} alt=".Net Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">Tailwind CSS</h1>
      </div>
    </div>
  </div>
  <div className="bg-gray-200 h-10"></div>
</div>

        <div>
          <div className="bg-gradient-to-t from-gray-900 to-gray-200 h-5" />

          <h1 className="text-3xl md:text-6xl text-white font-semibold ml-10 relative">
            Meine Projekte
          </h1>

          <div className="h-1/2 w-auto text-white bg-gray-900 flex flex-col sm:flex-row items-center">
            <div className="flex-1 sm:order-1">
              <h2 className="text-2xl font-bold mb-2 ml-10">Stormguard</h2>
              <a href="https://stormguard.netlify.app/">
                <h3 className="text-lg font-semibold mb-2 ml-10">Website</h3>
              </a>
              <a href=" https://github.com/DamianEisenring/weatherapp">
                <h3 className="text-lg font-semibold mb-2 ml-10">Github</h3>
              </a>
              <h1 className="text-white bg-gray-900 ml-10">
                Dieser Wetterservice ermöglicht Benutzern die Anmeldung und das
                Speichern ihrer bevorzugten Standorte. Die App verwendet
                Firebase für die Authentifizierung und Firestore für die
                Datenbank. Nutzer können sich entweder mit ihrer E-Mail und
                einem Passwort anmelden oder ihre Google-Konten verwenden.
              </h1>
            </div>
            <img
              src={Stormguard_mockup}
              alt="placeholder"
              className="ml-auto mr-5 sm:mr-10 mb-5 sm:mb-0 w-full max-w-sm sm:order-2"
            />
          </div>

          <div className="bg-gray-900 h-10"></div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-200 h-5" />

          <div className="h-1/2 w-auto text-white bg-gray-200 flex flex-col sm:flex-row items-center sm:items-center">
            <img
              src={ScheduleSphere_mockup}
              alt="placeholder"
              className="ml-auto ml-5 sm:ml-10 mb-5 sm:mb-0 w-full max-w-sm sm:order-2"
            />
            <div className="flex-1 sm:order-3 text-black">
              <h2 className="text-2xl font-bold mb-2 ml-10">ScheduleSphere</h2>
              <a href="https://schedulesphere.netlify.app/">
                <h3 className="text-lg font-semibold mb-2 ml-10">Website</h3>
              </a>
              <a href="https://github.com/DamianEisenring/todolist_firebase_firestore">
                <h3 className="text-lg font-semibold mb-2 ml-10">Github</h3>
              </a>
              <h1 className="bg-gray-200 ml-10">
                Diese Todoapp ermöglicht Benutzern die Anmeldung und die
                Speicherung wichtiger Aktivitäten. Die App verwendet Firebase
                für die Authentifizierung und Firestore für die Datenbank. Dabei
                können sich die User mit Email und Passwort einloggen.
              </h1>
            </div>
          </div>

          <div className="bg-gray-200 h-10"></div>

          <div className="bg-gradient-to-t from-gray-900 to-gray-200 h-5" />

          <div className="h-1/2 w-auto text-white bg-gray-900 flex flex-col sm:flex-row items-center">
            <div className="flex-1 sm:order-1">
              <h2 className="text-2xl font-bold mb-2 ml-10">PlauderPinguin</h2>
              <a href="https://github.com/DamianEisenring/PlauderPinguin">
                <h3 className="text-lg font-semibold mb-2 ml-10">Github</h3>
              </a>

              <h1 className="text-white bg-gray-900 ml-10">
                PlauderPinguin ist eine Webseite, welche ich als Fullstack
                Applikation erstellt habe. In dieser wird es ermöglicht, dass
                der Benutzer sich Anmelden kann und mit gewünschten Benutzer
                kommunizieren kann. Die App verwendet Asp.Net Core-Web-Api im
                Backendbereich und React.js mit Vanilla Css im Frontend.
              </h1>
            </div>
            <img
              src={plauderpinguin_mockup}
              alt="placeholder"
              className="ml-auto mr-5 sm:mr-10 mb-5 sm:mb-0 w-full max-w-sm sm:order-2"
            />
          </div>

          <div className="bg-gray-900 h-10 mt-5 sm:mt-10" />
        </div>
      </div>
    </div>
  );
}

export default Informatik;
