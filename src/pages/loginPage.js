import React, { useState } from "react";
import { Header } from "components";
import authProvider from "../utils/authProvider"
import logo from '../assets/logo.png'

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

export default function LoginPage() {
    if (authProvider.getUsername()) {
      window.location.href = "/role"
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSumbit = (e) => {
        // todo: add auth and change this to set session
        authProvider.setUsername(username)
        authProvider.setPassword(password)
        window.location.href = "/role"
    }

    return (
    <div>
        <Header listOfLink={headerLink}/>

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img viewBox="0 0 34 34" className="mx-auto h-24 fill-current w-auto" src={logo}/>
            <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSumbit}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
        </div>
    </div>
)}
