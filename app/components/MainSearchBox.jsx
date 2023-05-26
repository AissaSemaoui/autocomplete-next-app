import React from "react";
import Autocomplete from "./Autocomplete/Autocomplete";
import Link from "next/link";
import { Location } from "../assets/icons/loaction";
import { ArrowUpLeft } from "../assets/icons/arrow-up-left";

const Locations = [
  {
    title: "Camp Nou Stadium",
    location: "Spain, Barcelona",
    link: "/hotel-camp-nou",
  },
  {
    title: "Eiffel Tower",
    location: "France, Paris",
    link: "/hotel-Eiffel",
  },
  {
    title: "Grand Canyon",
    location: "United States, Arizona",
    link: "/hotel-grand-canyon",
  },
  {
    title: "Great Wall of China",
    location: "China, Beijing",
    link: "/hotel-wall-china",
  },
  {
    title: "Taj Mahal",
    location: "India, Agra",
    link: "/hotel-taj-mahal",
  },
];

const LocationItem = ({ hit, components }) => {
  return (
    <Link
      href={hit.link}
      className="h-full w-full group flex items-center gap-4 p-2"
    >
      <div className="pl-2">
        <Location
          className="text-blue-900 group-hover:text-blue-700"
          size="24"
        />
      </div>
      <div
        className={`flex-1 flex flex-col justify-center font-metropolis font-medium`}
      >
        <h5 className="text-lg text-blue-950 group-hover:text-blue-700">
          <components.Highlight hit={hit} attribute="title" />
        </h5>
        <span className="text-md text-gray-400">
          <components.Highlight hit={hit} attribute="location" />
        </span>
      </div>
      <div>
        <ArrowUpLeft className="text-gray-400" />
      </div>
    </Link>
  );
};

function MainSearchBox({ className }) {
  return (
    <div className={className}>
      <Autocomplete
        className="h-full"
        // openOnFocus={true}
        autoFocus={true}
        getSources={({ query }) => [
          {
            sourceId: "Locations",
            getItems() {
              return Locations.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
              ).map((item) => ({
                title: item.title,
                location: item.location,
                link: item.link,
              }));
            },
            templates: {
              item({ item, components }) {
                return <LocationItem hit={item} components={components} />;
              },
              noResults: ({ state }) => (
                <h1 className="text-blue-950">
                  No results for &quot;<strong>{state.query}</strong>&quot;
                </h1>
              ),
            },
          },
        ]}
      />
    </div>
  );
}

export default MainSearchBox;
