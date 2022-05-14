import React, { useState } from "react";
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

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSumbit = (e) => {
        // todo: add auth and change this to set session
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        window.location.href = "/role"
    }

    return (
    <div>
        <Header listOfLink={headerLink}/>

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <svg viewBox="2 2 34 34" className="mx-auto h-12 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M6,19v8c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H6z M21,24c0,1.7-1.3,3-3,3h-4c-1.7,0-3-1.3-3-3v-2c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V24z"/>
                <g><path d="M22,7.1V17h4v-3C26,11.1,24.4,8.5,22,7.1z"/><path d="M10,7.1c-2.4,1.4-4,4-4,6.9v3h4V7.1z"/></g>
                <g><path d="M19,8h-6c-0.6,0-1-0.4-1-1V5c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3v2C20,7.6,19.6,8,19,8z M14,6h4V5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1V6z"/></g>
                <path d="M18,6h-4c-0.7,0-1.4,0.1-2,0.3V7v1v9h8V8V7V6.3C19.4,6.1,18.7,6,18,6z"/>
                <g><path d="M4,18.2c-1.2,0.4-2,1.5-2,2.8v4c0,1.3,0.8,2.4,2,2.8V18.2z"/></g>
                <g><path d="M28,18.2v9.6c1.2-0.4,2-1.5,2-2.8v-4C30,19.7,29.2,18.6,28,18.2z"/></g>
            </svg>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
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

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div> */}

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
