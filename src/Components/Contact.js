import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

function Contact() {
  return (
    <div className="bg-gray-200 h-screen bg-cover bg-no-repeat overflow-hidden grid place-items-center custom-scrollbar">
      <div className="rounded-xl bg-gray-900 h-30vh w-80vw sm:w-70vw md:w-60vw lg:w-50vw xl:w-40vw ">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-20 justify-center m-10">
          <a
            href="https://github.com/DamianEisenring"
            target="_blank"
            rel="noreferrer"
            className="text-white filli text-center sm:text-left"
          >
            <AiFillGithub style={{ fontSize: "4rem" }} />
            <h1 className="justify-center flex text-lg sm:text-xl">GitHub</h1>
          </a>
          <a
            href="mailto:damian.eisenring@stud.altekanti.ch"
            target="_blank"
            rel="noreferrer"
            className="text-white filli text-center sm:text-left"
          >
            <IoIosMail style={{ fontSize: "4rem" }} />
            <h1 className="justify-center flex text-lg sm:text-xl">Mail</h1>
          </a>
          <a
            href="https://www.linkedin.com/in/damian-eisenring-aa7b182b1/"
            target="_blank"
            rel="noreferrer"
            className="text-white filli text-center sm:text-left justify-center"
          >
            <CiLinkedin style={{ fontSize: "4rem" }} />
            <h1 className="justify-center flex text-lg sm:text-xl">Linkedin</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
