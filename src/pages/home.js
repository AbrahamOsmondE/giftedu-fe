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
    return (
    <div>
        <Header listOfLink={headerLink}/>
        This is home page
    </div>
)}
