import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealData = () => {
  const { mealid } = useParams(); // Extract meal ID from route params
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch Meal Info
  const getInfo = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsonData = await response.json();
      setInfo(jsonData.meals[0]); // Update info state
    } catch (error) {
      console.error('Error fetching meal data:', error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Call getInfo when component loads
  useEffect(() => {
    getInfo();
  }, [mealid]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 font-sans">
      {loading ? (
        <p className="text-gray-600 text-xl">Loading meal details...</p>
      ) : !info ? (
        <p className="text-red-500 text-lg">Data Not Found</p>
      ) : (
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          {/* Meal Title and Image */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold font-sans text-gray-800">{info.strMeal}</h1>
            <img
              src={info.strMealThumb}
              alt={info.strMeal}
              className="rounded-lg mt-4 w-full max-w-lg h-auto object-cover mx-auto"
            />
          </div>

          {/* Meal Instructions */}
          <div className="mt-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              Instructions
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
              {info.strInstructions}
            </p>
          </div>

          {/* Ingredients and Measures */}
          <div className="mt-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              Ingredients
            </h3>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-600 bg-gray-100 py-3 px-4 rounded-lg">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                const ingredient = info[`strIngredient${index}`];
                const measure = info[`strMeasure${index}`];
                return (
                  ingredient && (
                    <li key={index} className="text-sm md:text-base">
                      {ingredient} - <span>{measure}</span>
                    </li>
                  )
                );
              })}
            </ul>
          </div>

          {/* Category and Area */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Category: {info.strCategory}
            </span>
            <span className="bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Area: {info.strArea}
            </span>
          </div>

          {/* YouTube Embed */}
          {info.strYoutube && (
            <div className="mt-6">
              <iframe
                width="100%"
                height="315"
                src={info.strYoutube.replace("watch?v=", "embed/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>

              {/* YouTube Link */}
              <a
                href={info.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 border-4 border-red-500/100 text-black border-3 text-sm font-medium px-6 py-2 rounded-lg shadow "
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MealData;
