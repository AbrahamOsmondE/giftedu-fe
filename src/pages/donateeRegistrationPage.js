import React, { useState } from "react";
import { Header } from "components";
import apiProvider from "utils/apiProvider";
import authProvider from '../utils/authProvider';

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

export default function DonateeRegistrationPage() {

    if (authProvider.getDonateeId()){
        window.location.href = "/donatee"
    }

    const username = authProvider.getUsername();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [description, setDescription] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleProfilePicChange = (e) => {
        getBase64(e.target.files[0], result => setProfilePic(result))
    }

    function getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            alert("failed to process image!")
        };
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleIsCheck = (e) => {
        setIsChecked(e.target.checked)
    }
    const handleSumbit = (e) => {
        if (!phoneNumber) {
            alert("phone number is required!")
            return
        }
        if (!isChecked) {
            alert("please agree to term and policy!")
            return
        }
        apiProvider.postDonatee(username, phoneNumber, profilePic, description)
        .then(res => {
            authProvider.setDonateeId(res.data.id);
            window.location.href = "/donatee"
        })
        .catch(err => {
            alert("something went wrong! please try again!");
        })
    }
    return (
    <div>
        <Header listOfLink={headerLink}/>
        
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full space-y-8">

            <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Register as a Donatee</h2>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                value={username}
                readOnly
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
                Phone Number*
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
                Profile Picture
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleProfilePicChange}
            />
            </div>

            <div className="mb-2">
            <label className="block text-gray-700 text-sm mb-2">
                Description
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="textarea"
                value={description}
                onChange={handleDescriptionChange}
            />
            </div>

            <input type="checkbox" onChange={handleIsCheck} /> agree to term and policy

            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSumbit}
              >
                Continue
              </button>
            </div>
        </div>
        </div>

    </div>
)}
