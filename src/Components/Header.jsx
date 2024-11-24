import React from "react";

const Header = () => {
  return (
    <>
      {/* Navigation */}
      

      {/* Hero Section */}
      <header className="py-20 bg-gray-50">
        {/* Hero Headings */}
        <div className="text-center px-5">
          <div className="inline-block px-5 py-2 bg-yellow-300 rounded-full uppercase text-sm font-medium mb-8">
            Now is your turn
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            The Countless Recipe is here Now!
          </h1>
          
          
          <div>
            {/* <a
              href="#"
              className="inline-block px-6 py-3 text-white bg-black rounded-full hover:bg-gray-800 transition"
            >
              View More
            </a> */}
          </div>
        </div>

        {/* Marquee Section */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[
              "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpc2h8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
              // Add more image URLs here
            ].map((image, index) => (
              <div
                key={index}
                className="w-80 h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Marquee ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Section */}
      <section className="max-w-4xl mx-auto px-5 py-16 text-gray-700">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde
          saepe natus quae mollitia optio voluptatibus ipsa dignissimos
          consectetur delectus perspiciatis ea facilis aspernatur exercitationem
          deleniti dolore rerum, maxime officia!
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          possimus dignissimos nostrum ex optio ad repudiandae mollitia
          provident, dolorem quae, reiciendis dicta incidunt vero, deleniti
          nobis! Impedit non quasi est.
        </p>
      </section>
    </>
  );
};

export default Header;
