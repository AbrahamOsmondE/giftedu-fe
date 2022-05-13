import React from "react";

export default function Button(title, href) {
    if (window.location.pathname === href) {
        return ( 
            <li className="mr-3" key={title}>
                <a 
                    className="inline-block text-black no-underline hover:text-gray-200 hover:text-underline py-2 px-4 rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-100 bg-indigo-300" 
                    href={href}
                >
                    {title}
                </a>
            </li>
        )
    }
    return (
        <li className="mr-3" key={title}>
            <a 
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4 rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-100 bg-indigo-700" 
                href={href}
            >
                {title}
            </a>
        </li>
    )
}