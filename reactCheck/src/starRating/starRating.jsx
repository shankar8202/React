import  { useState } from 'react';

const StarRating = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const setRating = (rating) => {
    setSelectedRating(rating);
  };

  const displayRating = () => {
    return `Selected Rating: ${selectedRating} stars`;
  };

  return (
    <div className="rating">
      <span className="star" onClick={() => setRating(1)}>&#9733;</span>
      <span className="star" onClick={() => setRating(2)}>&#9733;</span>
      <span className="star" onClick={() => setRating(3)}>&#9733;</span>
      <span className="star" onClick={() => setRating(4)}>&#9733;</span>
      <span className="star" onClick={() => setRating(5)}>&#9733;</span>
      <p id="selected-rating">{displayRating()}</p>
    </div>
  );
};

export default StarRating;


//or

// import React, { useState } from 'react';

// const StarRating = () => {
//   const [selectedRating, setSelectedRating] = useState(0);

//   const setRating = (rating) => {
//     setSelectedRating(rating);
//   };

//   return (
//     <div className="rating">
//       {[1, 2, 3, 4, 5].map((rating) => (
//         <span
//           key={rating}
//           className={`star ${selectedRating >= rating ? 'active' : ''}`}
//           onClick={() => setRating(rating)}
//         >
//           &#9733;
//         </span>
//       ))}
//       <p id="selected-rating">Selected Rating: {selectedRating} stars</p>
//     </div>
//   );
// };

// export default StarRating;
