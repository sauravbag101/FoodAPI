import React, { useState } from 'react';
import Card from './Card';
import Textanimation from './Textanimation';
import Header from './Header';

const First = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await get.json();
    console.log(jsonData.meals);
    setData(jsonData.meals);
  };

  console.log(data);

  return (
    <>
      <Textanimation />
      <div className="flex flex-col items-center mt-8 px-4 sm:flex-row sm:justify-center sm:gap-4">
        <input
          className="p-3 rounded-lg border-2 border-inherit w-full sm:w-[400px] md:w-[550px]"
          type="text"
          placeholder="Enter your dish"
          onChange={handleInput}
        />
        <button
          className="bg-red-400 rounded-lg p-3 mt-4 sm:mt-0 sm:ml-3 px-6 text-white hover:bg-red-500 transition"
          onClick={myFun}
        >
          Search
        </button>
      </div>
      <Card detail={data} />
      <Header />
    </>
  );
};

export default First;
