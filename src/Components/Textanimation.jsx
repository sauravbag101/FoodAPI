import React from 'react';

const Textanimation = () => {
  return (
    <div className="py-8 mt-10 flex justify-center items-center px-4">
      <div className="Iam text-gray-800">
        <p className="mb-5 text-4xl sm:text-4xl md:text-6xl font-serif text-gray-900 w-full sm:w-[500px] md:w-[700px] mx-auto">
          Start cooking your favorite recipe with just one word
        </p>
        <b className="relative h-11 overflow-hidden inline-block">
          <div className="innerIam text-red-500 text-3xl sm:text-xl md:text-5xl relative inline-block animate-move">
            Mutton<br />
            Cake<br />
            Chicken<br />
            Fish<br />
            Pancakes<br />
            Veg Food<br />
            Honey<br />
            Bread<br />
          </div>
        </b>
      </div>
    </div>
  );
};

export default Textanimation;
