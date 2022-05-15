import React, { useEffect, useState } from "react";
import { Header } from "components";
import apiProvider from "../utils/apiProvider";
import { useParams } from "react-router-dom";

let headerLink = [
  {
    title: "logout",
    href: "/logout",
  },
];

export default function DonateeChildPage() {
  const params = useParams();
  const child_id = params.id;

  const [details, setDetials] = useState();

  useEffect(() => {
      apiProvider.getChild(child_id)
      .then(res => {
          setDetials(res.data)
      })
  }, [child_id])


  if (!details) {
    return (
      <div>
        <Header listOfLink={headerLink} />
        Loading...
      </div>
    )
  }

  return (
    <div>
      <Header listOfLink={headerLink} />
      <div className="px-20 grid grid-cols-2 gap-4 pb-10">
        <div className="min-h-full flex items-center justify-center py-4">
          <div className="h-40 w-40 overflow-hidden rounded-lg">
              <img className="object-fill" src={details.photo ? details.photo : "https://i.imgflip.com/1slnr0.jpg"} alt={details.name}/>
          </div>
        </div>
        <div className="border border-gray-400 bg-white rounded-b p-4 flex rounded-lg flex-col justify-between leading-normal">
          <div className="flex justify-between items-center mb-4 pr-5">
            <div className="text-sm">
              <p className="text-gray-900 leading-none text-lg">{details.name}</p>
              <p className="text-gray-600 text-lg">{details.donee}</p>
            </div>
            <div>
              <p className="text-lg text-right pr-8">$ {details.subscription_cost} /month</p>
            </div>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Current Donation per Month: ${details.fund}
            </div>
            <p className="text-gray-700 text-base">{details?.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl flex ml-48 flex-wrap font-bold text-xl my-3 ">
        Updates
        <button
            className="group relative w-auto flex justify-center py-1 pl-2 pr-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-5"
            onClick={()=>{window.location.href = `/donatee/child/${child_id}/update`}}
        >
            + Add Post
        </button>
      </div>
      {details.posts.length === 0 && 
        <div className="max-w-6xl flex ml-48 flex-wrap text-l my-3 ">
          No update yet ... 
        </div>
      }
      {details.posts.length > 0 && 
      details.posts.map((update) => {
        const date = (new Date(update.created)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
        return (
          <div className="max-w-6xl flex ml-48 flex-wrap" key={update.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{update?.title}</div>
                <p className="text-gray-700 text-base">{update?.text}</p>
              </div>
              <div className="px-6 pt-4 pb-2 flex flex-row-reverse">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {date}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
