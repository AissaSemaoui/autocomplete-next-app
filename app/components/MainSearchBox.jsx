import React from "react";
import Autocomplete from "./Autocomplete/Autocomplete";
import Link from "next/link";
import { Location } from "../assets/loaction";

const Locations = [
  {
    title: "Camp Nou Stadium",
    location: "Spain, Barcelona",
  },
  {
    title: "Eiffel Tower",
    location: "France, Paris",
  },
  {
    title: "Grand Canyon",
    location: "United States, Arizona",
  },
  {
    title: "Great Wall of China",
    location: "China, Beijing",
  },
  {
    title: "Taj Mahal",
    location: "India, Agra",
  },
];

const LocationItem = ({ hit, components }) => {
  return (
    <Link
      href={hit.location}
      className="h-full w-full group flex items-center gap-4 px-2"
    >
      <div className="">
        <Location
          className="fill-blue-800 group-hover:fill-blue-950"
          size="24"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h5 className="text-base text-blue-950 group-hover:text-blue-800">
          <components.Highlight hit={hit} attribute="title" />
        </h5>
        <span className="text-sm text-gray-400">
          <components.Highlight hit={hit} attribute="location" />
        </span>
      </div>
    </Link>
  );
};

function MainSearchBox({ className }) {
  return (
    <div className={className}>
      <Autocomplete
        className="h-full"
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: "Locations",
            getItems() {
              return Locations.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
              ).map((item) => ({
                title: item.title,
                location: item.location,
              }));
            },
            templates: {
              item({ item, components }) {
                return <LocationItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </div>
  );
}

export default MainSearchBox;
