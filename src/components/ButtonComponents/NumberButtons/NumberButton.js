import React from "react";

const NumberButton = ( {num} ) => { // Destructoring props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='numberButton'>{num}</button>
    </>
  );
};

export default NumberButton;
