import React from "react";

const SpecialButton = ( {spec} ) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='specialButton'>{spec}</button>
    </>
  );
};

export default SpecialButton;