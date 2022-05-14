import React from "react";
import { Header } from "components";

let headerLink = [
    {
        title: "logout", 
        href: "/logout"
    },
]

export default function ChooseRolePage() {

    const handleDonator = (e) => {
        // todo: add check donator, if not found, redirect to '/donator/register'
        window.location.href='/donator'
    }

    const handleDonatee = (e) => {
        // todo: add check donatee, if not found, redirect to '/donatee/register'
        window.location.href='/donatee'
    }

    return (
    <div>
        <Header listOfLink={headerLink}/>
        
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in as:</h2>
          <div className="mt-8 space-y-6">
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleDonator}
             >
                Donator
              </button>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleDonatee}
              >
                Donatee
              </button>
          </div>
        </div>
        </div>
    </div>
)}
