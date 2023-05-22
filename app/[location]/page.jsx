import React from "react";

function SearchId({ params }) {
  return (
    <div className="flex h-screen justify-center items-center">
      <h1 className="text-3xl text-gray-800 text-center">
        Here we are {params.location}
      </h1>
      <p className="text-yellow-50 text-center">
        Note : we can show any content here based on the link or the location
      </p>
    </div>
  );
}

export default SearchId;
