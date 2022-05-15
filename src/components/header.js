import React from "react";
import Button from "./button";
import logo from '../assets/logo.png'

export default function Header(props) {
    return (
    <div>
        <div className="w-full mx-auto flex flex-wrap items-center justify-between  py-3 px-2 mb-5 shadow opacity-85">

            <div className="pl-4 flex items-center">
                <a className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                    <img viewBox="0 0 34 34" className="h-16 fill-current inline" src={logo}/>
                    <div style={{display: "inline"}} className="px-2">{"GIFTEDU"}</div>
                </a>
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    {props.listOfLink.map((value) => Button(value.title, value.href))}
                </ul>
            </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </div>
)}