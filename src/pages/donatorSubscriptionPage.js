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
        href: "/donator"
    },
    {
        title: "your subscriptions", 
        href: "/donator/subscription"
    },
    {
        title: "logout", 
        href: "/logout"
    },
]

export default function DonatorSubscriptionPage() {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        apiProvider.getSubscription(authProvider.getDonatorId())
        .then(res => {
            setChildren(res.data)
        })
    }, [])

    const handleCardOnClick = (child_id) => {
        window.location.href = `/donator/child/${child_id}`
    }

    if (children.length === 0) {
        return (<div>
            <Header listOfLink={headerLink}/> 
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Your Subscriptions</h2>
            <p className="w-full text-center mt-10"> You don't have any subscription yet... </p>
        </div>)
    }

    return (
    <div>
        <Header listOfLink={headerLink}/>

        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Your Subscriptions</h2>

        <div className="px-20 grid grid-cols-4 gap-4">
            {children.map(child => {
                let name = child.name;
                let id = child.id;
                let createdTime = child.created

                return(
                    <button className="rounded overflow-hidden shadow-lg p-4 m-4" onClick={e => handleCardOnClick(id)} key={id}>
                    <div className="px-6 py-4">
                        <div className=" text-xl mb-2">
                        <span className="inline-block bg-indigo-700 rounded-full px-3 py-1 text-sm text-gray-100 mr-2 mb-2">{id}</span>
                        <br/>
                        <span className="font-bold"> {name} </span>
                        </div>
                        
                        <p className="text-gray-700 text-base">
                            Subscribed since: <br/>
                            {(new Date(createdTime)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")}
                        </p>
                    </div>
                    </button>
                )
            })}

        </div>
    </div>
)}
