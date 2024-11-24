// import React from 'react'

// const Card = ({detail}) => {
//     console.log(detail)
//   return (
//     <div>
//       <div>
//         {!detail ? "" : detail.map((curItem)=> {
//             return (
//                 <div className='flex flex-wrap gap-5 justify-center w-[90%] mx-auto mt-11 '>
//                     <div>
//                     <div>
//                     <img src={curItem.strMealThumb} alt="" className='w-[280px] h-[380px] rounded-t-lg '/>
//                     </div>
//                     <div className='bg-white text-center py-3 shadow-md '>
//                     <p>{curItem.strMeal}</p>
//                     <button>Recipe</button>
//                     </div>
//                     </div>
//                 </div>

                
//             )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Card







import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { NavLink } from 'react-router-dom';

const Meals = ({ detail }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center  w-[90%] mx-auto mt-11">
      {!detail || detail.length === 0 ? (
      <div className="w-full flex items-center justify-center p-4">
      {/* Uncomment below if needed */}
      {/* <p className="text-center">Data Not Found</p> */}
      <div className="w-full max-w-[800px] h-[300px]  sm:h-[400px] flex items-center justify-center mt-4">
        <DotLottieReact
          src="https://lottie.host/4156d8e0-cf40-4d02-ab9f-3fc410dc8ec3/45AvE19DVP.lottie"
          loop
          autoplay
          //  className="w-full sm:w-[800px]"
        />
      </div>
    </div>
    
      ) : (
        detail.map((curItem) => (
          <div
          key={curItem.idMeal}
          className="w-full max-w-[250px] h-auto text-center bg-white shadow-md rounded-b-lg mx-auto sm:mx-0">
          
  <img
    src={curItem.strMealThumb}
    alt={curItem.strMeal}
    className="w-full h-[200px] sm:h-[250px] rounded-t-lg object-cover"
  />
  <p className="font-semibold mt-2 text-sm sm:text-base">{curItem.strMeal}</p>
  <NavLink to={`/${curItem.idMeal}`}>
    <button className="mt-3 w-full bg-red-600 text-white text-xs sm:text-sm rounded-full py-2 sm:py-3 cursor-pointer hover:bg-orange-600 transition">
      Recipe
    </button>
  </NavLink>
</div>

        ))
      )}
    </div>
  );
};

export default Meals;
