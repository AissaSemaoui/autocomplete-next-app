import React, { useEffect } from "react";
import Autocomplete from "./Autocomplete/Autocomplete";
import LocationItem from "./LocationItem";

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

function MainSearchBox({ className, setSearchAPI, options = {} }) {
  return (
    <div className={className}>
      <Autocomplete
        className="h-full"
        setSearchAPI={setSearchAPI}
        placeholder="Search your accommodation..."
        autoFocus={true}
        getSources={({ query }) => [
          {
            sourceId: "Locations",
            getItems() {
              if (query === "") return [];

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
              noResults: ({ state }) => {
                if (state.query.length < 1) return;

                return (
                  <h1 className="text-blue-950">
                    No results for &quot;<strong>{state.query}</strong>&quot;
                  </h1>
                );
              },
            },
          },
        ]}
        {...options}
      />
    </div>
  );
}

export default React.memo(MainSearchBox);
