import React, { useState } from "react";
import { Header } from "components";
import Button from "components/button";
import apiProvider from "../utils/apiProvider";
import authProvider from "../utils/authProvider";

let headerLink = [
  {
    title: "logout",
    href: "/logout",
  },
];

export default function DonateeChildPage() {
  const [details, setDetials] = useState({});
  return (
    <div>
      <Header listOfLink={headerLink} />
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: details?.photo }}
          title="Woman holding a mug"
        ></div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="flex justify-between items-center mb-4 pr-64">
            <div class="text-sm">
              <p class="text-gray-900 leading-none text-lg">{details?.name}</p>
              <p class="text-gray-600 text-lg">{details?.donee}</p>
            </div>
            <div>
              <ul class="w-1.5">
                <li className="mr-3">
                  <div className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4 rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-100 bg-indigo-700">
                    Subscribe
                  </div>
                </li>
              </ul>
              <p class="text-lg">{details?.subscription_cost}month</p>
            </div>
          </div>
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              Current Donation per Month:{details?.fund}
            </div>
            <p class="text-gray-700 text-base">{details?.description}</p>
          </div>
        </div>
      </div>
      <div class="max-w-6xl flex ml-48 justify-between font-bold text-xl my-3 ">
        <div class="text-xl">Updates</div>
        <div class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4 rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-100 bg-indigo-700">
          + Add Updates
        </div>
      </div>
      {details?.posts?.map((update) => {
        const date = new Date(update?.created);
        return (
          <div class="max-w-6xl flex ml-48 flex-wrap">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{update?.title}</div>
                <p class="text-gray-700 text-base">{update?.text}</p>
              </div>
              <div class="px-6 pt-4 pb-2 flex flex-row-reverse">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
