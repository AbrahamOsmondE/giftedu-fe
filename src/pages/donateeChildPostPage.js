import React, { useState } from "react";
import { Header } from "components";
import apiProvider from "utils/apiProvider";
import { useParams } from "react-router-dom";

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

export default function DonateeChildPostPage() {

    const params = useParams();
    const child_id = params.id;

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSumbit = (e) => {
        if (!title) {
            alert("title is required!")
            return
        }
        if (!text) {
            alert("text is required!")
            return
        }
        apiProvider.postUpdate(title, text, child_id)
        .then(res => {
            window.location.href = `/donatee/${child_id}`
        })
        .catch(err => {
            alert("something went wrong! please try again!");
        })
    }
    return (
    <div className="pb-20">
        <Header listOfLink={headerLink}/>
        
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full space-y-8">

            <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Post an Update</h2>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
                Title
            </label>
            <input className="shadow appearance-none border font-bold rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                value={title}
                onChange={handleTitleChange}
            />
            </div>

            <div className="mb-2">
            <label className="block text-gray-700 text-sm mb-2">
                Text
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="textarea"
                value={text}
                onChange={handleTextChange}
            />
            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSumbit}
              >
                Post
              </button>
            </div>
        </div>
        </div>

    </div>
)}
