import React from "react";

import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";


function Portrait(){
    return(
        <div className="bg-schwingen_img4 h-screen bg-cover bg-no-repeat overflow-hidden grid place-items-center custom-scrollbar">
            < div className="rounded-xl bg-gray-900   h-1/2 w-1/2 " >
                <div className="flex space-x-20 justify-center mt-40">
                    <a 
                    href="https://github.com/DamianEisenring" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-white filli"
                    >
                        <FaGithub style={{ fontSize: '120px' }} />
                    </a>
                    <a
                        href="mailto:damian.eisenring@stud.altekanti.ch"
                        target="_blank"
                        rel="noreferrer" 
                        className="text-white filli"
                        >
                    <IoIosMail className="text-white filli" style={{ fontSize : '150px' }}/>
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/damian-eisenring-aa7b182b1/"
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-white filli"
                    >
                        <CiLinkedin className="text-white filli" style={{ fontSize : '150px' }}/>                        
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Portrait;