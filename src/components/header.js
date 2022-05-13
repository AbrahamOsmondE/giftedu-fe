import React from "react";
import Button from "./button";

export default function Header(props) {
    return (
    <div>
        <div className="w-full mx-auto flex flex-wrap items-center justify-between  py-3 px-2 mb-5 shadow opacity-85">

            <div className="pl-4 flex items-center">
                <a className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                    <svg viewBox="2 2 34 34" className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6,19v8c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H6z M21,24c0,1.7-1.3,3-3,3h-4c-1.7,0-3-1.3-3-3v-2c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V24z"/>
                        <g><path d="M22,7.1V17h4v-3C26,11.1,24.4,8.5,22,7.1z"/><path d="M10,7.1c-2.4,1.4-4,4-4,6.9v3h4V7.1z"/></g>
                        <g><path d="M19,8h-6c-0.6,0-1-0.4-1-1V5c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3v2C20,7.6,19.6,8,19,8z M14,6h4V5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1V6z"/></g>
                        <path d="M18,6h-4c-0.7,0-1.4,0.1-2,0.3V7v1v9h8V8V7V6.3C19.4,6.1,18.7,6,18,6z"/>
                        <g><path d="M4,18.2c-1.2,0.4-2,1.5-2,2.8v4c0,1.3,0.8,2.4,2,2.8V18.2z"/></g>
                        <g><path d="M28,18.2v9.6c1.2-0.4,2-1.5,2-2.8v-4C30,19.7,29.2,18.6,28,18.2z"/></g>
                    </svg>
                    <div style={{display: "inline"}} className="px-2">{"BELIANAK"}</div>
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