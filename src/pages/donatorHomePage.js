import React, { useEffect, useState } from "react";
import { Header } from "components";
import apiProvider from "../utils/apiProvider"

let headerLink = [
    {
        title: "choose role", 
        href: "/role"
    },
    {
        title: "logout", 
        href: "/logout"
    },
]

export default function DonatorHomePage() {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        apiProvider.getAllChildren()
        .then(res => {
            setChildren(res.data)
        })
    }, [])

    const handleCardOnClick = (child_id) => {
        window.location.href = `/child/${child_id}`
    }

    if (children.length === 0) {
        return (<div><Header listOfLink={headerLink}/>Loading...</div>)
    }

    return (
    <div>
        <Header listOfLink={headerLink}/>

        <div className="px-20 grid grid-cols-4 gap-4">
            {children.map(child => {
                let name = child.name;
                let img = child.photo ? child.photo : "https://i.imgflip.com/1slnr0.jpg";
                let description = child.description.length > 50 ? `${child.description.slice(0, 48)}...` : child.description;
                let donatee = child.donee
                let id = child.id

                return(
                    <button className="rounded overflow-hidden shadow-lg p-4 m-4" onClick={e => handleCardOnClick(id)} key={id}>
                    <div className="h-56 w-auto overflow-hidden">
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
    </div>
)}
