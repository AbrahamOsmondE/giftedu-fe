import React, { useEffect, useState } from "react";
import { Header } from "components";
import apiProvider from "../utils/apiProvider"
import authProvider from "utils/authProvider";

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

export default function DonateeHomePage() {
    const [details, setDetials] = useState({})
    const [children, setChildren] = useState([]);

    useEffect(() => {
        apiProvider.getDonateeDetails(authProvider.getDonateeId())
        .then(res => {
            setDetials(res.data)
            setChildren(res.data.children)
        })
    }, [])

    const handleCardOnClick = (child_id) => {
        window.location.href = `/donatee/child/${child_id}`
    }

    if (details === {}) {
        return (<div><Header listOfLink={headerLink}/>Loading...</div>)
    }

    return (
    <div className="pb-20">
        <Header listOfLink={headerLink}/>

        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Hello, {details.name}</h2>
        <div className="min-h-full flex items-center justify-center py-4">
            <div className="h-40 w-40 overflow-hidden rounded-full">
                <img className="object-fill" src={details.photo ? details.photo : "https://i.imgflip.com/1slnr0.jpg"} alt={details.name}/>
            </div>
        </div>
        <p className="text-center font-bold text-gray-900">Description:</p>
        <p className="text-center text-gray-900 pb-10">{details.description}</p>

        <p className="text-center font-bold text-gray-900">Phone Number:</p>
        <p className="text-center text-gray-900 pb-10">{details.phone_number ? details.phone_number : "not set" }</p> 

        <p className="text-center font-bold text-gray-900">Children:</p>
        <div className="min-h-full flex items-center justify-center py-4">
        <button
            className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={()=>{window.location.href = "/donatee/register_child"}}
        >
            Add Child
        </button>
        </div>

        { children.length ?
            <div className="px-20 grid grid-cols-4 gap-4">
            {children.map(child => {
                let name = child.name;
                let img = child.photo ? child.photo : "https://i.imgflip.com/1slnr0.jpg";
                let description = child.description.length > 50 ? `${child.description.slice(0, 48)}...` : child.description;
                let donatee = details.name
                let id = child.id

                return(
                    <button className="rounded overflow-hidden shadow-lg p-4 m-4" onClick={e => handleCardOnClick(id)} key={id}>
                    <div className="h-56 w-auto overflow-hidden rounded-lg">
                        <img className="object-fill" src={img} alt={name} />
                    </div>
                    <div className="px-6 py-4">
                        <div className=" text-xl mb-2">
                            <span className="font-bold"> {name} </span>
                            <br/>
                            <span className="inline-block bg-indigo-700 rounded-full px-3 py-1 text-sm text-gray-100 mr-2 mb-2">{donatee}</span>
                        </div>
                        
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                    </div>
                    </button>
                )
            })}

        </div>
        : <p className="w-full text-center mt-10">No Child Found </p>
        }
    </div>
)}
