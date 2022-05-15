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

export default function BuyerPage() {
  return (
    <div>
      <Header listOfLink={headerLink} />
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: "" }}
          title="Woman holding a mug"
        ></div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="flex justify-between items-center mb-4 pr-64">
            <div class="text-sm">
              <p class="text-gray-900 leading-none text-lg">Jonathan Reinink</p>
              <p class="text-gray-600 text-lg">Aug 18</p>
            </div>
            <div>
              <ul class="w-1.5">{Button("Subscribe", "aojsdnj")}</ul>
              <p class="text-lg">/month</p>
            </div>
          </div>
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              Current Donation per Month:
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
