import React from "react";
import { Header } from "components";

let headerLink = [
    {
        title: "login", 
        href: "/login"
    },
    {
        title: "home", 
        href: "/"
    },
]

export default function Home() {
    const handleLoginButton = (e) => {
        window.location.href = "/login"
    }
    return (
    <div className="pb-20">
        <Header listOfLink={headerLink}/>

        <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">Subscription-based donation</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
                GIFTEDU
            </h1>
            <p className="leading-normal text-l mb-8">
                Alone we can do so little; Together we can do so much.
                <br/>- Helen Keller
            </p>
            <p className="leading-normal text-2xl mb-8">
                Subscribe to donate monthly to help a child pursue a higher education. Start by helping a child!
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-indigo-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={handleLoginButton}
            >
                Start Now!
            </button>
            </div>

            <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="https://img.freepik.com/free-vector/group-students-school_52683-43231.jpg?t=st=1652633598~exp=1652634198~hmac=635ded83cddb1d9cecea325095058c24521fb7382dd7eafcfc831b800625fa87&w=1480" alt="students"/>
            </div>
        </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
        </div>
    </div>
)}
