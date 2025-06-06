import React from "react";

const Crops = () => {
  const cropIcons = [
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_strawberry.svg", alt: "Strawberry" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_cauliflower.svg", alt: "Cauliflower" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_guava.svg", alt: "Guava" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_pigeonpea.svg", alt: "Pigeonpea" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_sorghum.svg", alt: "Sorghum" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_pomegranate.svg", alt: "Pomegranate" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_garlic.svg", alt: "Garlic" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_manioc.svg", alt: "Manioc" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_potato.svg", alt: "Potato" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_apple.svg", alt: "Apple" },
    { src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_wheat.svg", alt: "Wheat" },
  ];

  // Function to generate a random border color
  const getRandomBorderColor = () => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD733", "#57FFF3", "#F333FF"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Horizontal Scrollable Row */}
      <div className="flex overflow-x-auto justify-between p-4">
        {cropIcons.map((crop, index) => (
          <div
            key={index}
            style={{ border: `1px solid ${getRandomBorderColor()}` }} // Apply random border
            className="h-[75px] w-[75px] flex items-center justify-center bg-white shadow-md rounded-full hover:shadow-lg transition-shadow shrink-0"
          >
            <img
              src={crop.src}
              alt={crop.alt}
              className="h-[60%] w-[60%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crops;













// import React from "react";

// const Crops = () => {
//   const cropIcons = [
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_strawberry.svg",
//       alt: "Strawberry",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_cauliflower.svg",
//       alt: "Cauliflower",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_guava.svg",
//       alt: "Guava",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_pigeonpea.svg",
//       alt: "Pigeonpea",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_sorghum.svg",
//       alt: "Sorghum",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_pomegranate.svg",
//       alt: "Pomegranate",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_garlic.svg",
//       alt: "Garlic",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_manioc.svg",
//       alt: "Manioc",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_potato.svg",
//       alt: "Potato",
//     },
//     {
//       src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_apple.svg",
//       alt: "Apple",
//     },

//     {
//         src: "https://plantix.net/en/library/assets/lib/icons/crop-icons/crop_wheat.svg",
//         alt : "Wheat"
//     }
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto px-4">
//       {/* Horizontal Scrollable Row */}
//       <div className="flex overflow-x-auto justify-between p-4 ">
//         {cropIcons.map((crop, index) => (
//           <div
//             key={index}
//             className="h-[80px] w-[80px] flex items-center justify-center bg-white shadow-md rounded-full hover:shadow-lg transition-shadow shrink-0"
//           >
//             <img
//               src={crop.src}
//               alt={crop.alt}
//               className="h-[60%] w-[60%] object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Crops;
