import React from "react";
import { Header } from "components";

export default function NotFound() {
    const handleLoginButton = (e) => {
        window.location.href = "/"
    }

    return <div className="pb-20">
        <Header listOfLink={[]}/>
        
        <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

            <div className="w-2/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7878.jpg?w=996&t=st=1652639416~exp=1652640016~hmac=70d3f3958783bd4d9488b2f651e0a74a22640e1ac9461027a090792bdc3d10f3" alt="404"/>
            </div>

            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">OOOPS!</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
                The page you were looking for does not exist!
            </h1>
            <button className="mx-auto lg:mx-0 hover:underline bg-indigo-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={handleLoginButton}
            >
                Go back to Home Page!
            </button>
            </div>
        </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
        </div>

    </div>;
}
