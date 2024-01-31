import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

function Contact() {
  return (
    <div className="bg-schwingen_img4 h-screen bg-cover bg-no-repeat overflow-hidden grid place-items-center custom-scrollbar">
      <div className="rounded-xl bg-gray-900 h-30vh w-30vw">
        <div className="flex space-x-20 justify-center m-10">
          <a
            href="https://github.com/DamianEisenring"
            target="_blank"
            rel="noreferrer"
            className="text-white filli"
          >
            <AiFillGithub  style={{ fontSize: '150px' }} />
            <h1 className="justify-center flex ">My GitHub</h1>
          </a>
          <a
            href="mailto:damian.eisenring@stud.altekanti.ch"
            target="_blank"
            rel="noreferrer"
            className="text-white filli"
          >
            <IoIosMail className="text-white filli" style={{ fontSize: '150px' }} />
            <h1 className="justify-center flex">Mail</h1>
          </a>
          <a
            href="https://www.linkedin.com/in/damian-eisenring-aa7b182b1/"
            target="_blank"
            rel="noreferrer"
            className="text-white filli"
          >
            <CiLinkedin className="text-white filli" style={{ fontSize: '150px' }} />
            <h1 className="justify-center flex">Linkedin</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
