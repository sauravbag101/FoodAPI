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
              
              
              "https://media.istockphoto.com/id/1293479617/photo/woman-hands-eating-vegan-salad-of-baked-vegetables-avocado-tofu-and-buckwheat-buddha-bowl-top.webp?a=1&b=1&s=612x612&w=0&k=20&c=rf958EjYC788RoUJ6o-CZCeFLxNIBJmH_7ai_SZAXtQ=",
              "https://media.istockphoto.com/id/1173089065/photo/ilish-or-hilsa-famous-bengali-fish-curry-with-grinded-mustard-seed.jpg?s=612x612&w=0&k=20&c=l4qvTypy8_QHOVMXQlSN8LYYGTwxm3hRSy9Ji_jISqI=",
              "https://media.istockphoto.com/id/1174567728/photo/ketogenic-diet-keto-brunch-boiled-egg-pork-steak-and-olives-cucumber-spinach-brie-cheese-nuts.jpg?s=612x612&w=0&k=20&c=f59X5n1LpERJm9y1QD4w4D2OagWs7K2IZC2j6ZVyKVQ=",
              "https://media.istockphoto.com/id/1319648667/photo/crispy-pancake-made-of-fermented-whole-grain-finger-millet-batter-served-with-cottage-cheese.jpg?s=612x612&w=0&k=20&c=s_4w9jCAI6vLcQAE58bknLmbOnbxt4_1UJv9wduB3kM=",
              "https://media.istockphoto.com/id/1350252553/photo/moong-dal-cheela.jpg?s=612x612&w=0&k=20&c=PDxn7f6hf5H66vttyodmQPKwKheURd4TA-W8nQh7b4I=",
              "https://media.istockphoto.com/id/1309353866/photo/seer-fish-fry.jpg?s=612x612&w=0&k=20&c=18mD5mCErONAEQYmOz970ZfM1zE_CfMD96VPaHmNSfA=",

              // Add more image URLs here
            ].map((image, index) => (
              <div
                key={index}
                className="w-full  sm:w-80 h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Marquee ${index}`}
                  className="w-full h-full sm:w-full object-cover"
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
