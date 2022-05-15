import React from "react";
import { Header } from "components";
import apiProvider from "../utils/apiProvider";
import authProvider from "../utils/authProvider";

let headerLink = [
    {
        title: "choose role", 
        href: "/role"
    },
    {
        title: "home", 
        href: "/donatee"
    },
    {
        title: "logout", 
        href: "/logout"
    },
]

export default function ChooseRolePage() {

    const handleDonator = (e) => {
        apiProvider.getDonatorFromName(authProvider.getUsername())
        .then( res => {
            authProvider.setDonatorId(res.data.id);
            window.location.href = '/donator'
        })
        .catch( () => {
            window.location.href = '/donator/register'
        });
    }

    const handleDonatee = (e) => {
        apiProvider.getDonateeFromName(authProvider.getUsername())
        .then( res => {
            authProvider.setDonateeId(res.data.id);
            window.location.href = '/donatee'
        })
        .catch( () => {
            window.location.href = '/donatee/register'
        });
    }

    return (
    <div>
        <Header listOfLink={headerLink}/>
        
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <svg viewBox="2 2 34 34" className="mx-auto h-12 w-auto fill-current">
        <path d="M6,19v8c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H6z M21,24c0,1.7-1.3,3-3,3h-4c-1.7,0-3-1.3-3-3v-2c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V24z"/>
            <g><path d="M22,7.1V17h4v-3C26,11.1,24.4,8.5,22,7.1z"/><path d="M10,7.1c-2.4,1.4-4,4-4,6.9v3h4V7.1z"/></g>
            <g><path d="M19,8h-6c-0.6,0-1-0.4-1-1V5c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3v2C20,7.6,19.6,8,19,8z M14,6h4V5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1V6z"/></g>
            <path d="M18,6h-4c-0.7,0-1.4,0.1-2,0.3V7v1v9h8V8V7V6.3C19.4,6.1,18.7,6,18,6z"/>
            <g><path d="M4,18.2c-1.2,0.4-2,1.5-2,2.8v4c0,1.3,0.8,2.4,2,2.8V18.2z"/></g>
            <g><path d="M28,18.2v9.6c1.2-0.4,2-1.5,2-2.8v-4C30,19.7,29.2,18.6,28,18.2z"/></g>
        </svg>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome, {authProvider.getUsername()} ! <br/>
            Sign in as:
         </h2>
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
