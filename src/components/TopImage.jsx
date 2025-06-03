// import React from "react";

// const TopImage = () => {
//   return (
//     <div className="relative h-[50vh] w-full overflow-hidden">
//       <img
//         src="/meteora.jpg"
//         alt="Top"
//         className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] [mask-size:100%_100%] [mask-repeat:no-repeat]"
//       />
//     </div>
//   );
// };

// export default TopImage;


import React from "react";

const TopImage = () => {
  return (
    <div className="absolute h-[60vh] md:h-[80vh] lg:h-[120vh] w-full overflow-hidden top-0">
      <img
        src="/mount_fuji.webp"
        alt="Top"
        className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] [mask-size:100%_100%] [mask-repeat:no-repeat]"
      />
    </div>
  );
};

export default TopImage;
