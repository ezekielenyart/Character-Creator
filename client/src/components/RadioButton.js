import React from 'react';

function RadioButton({ choice }) {

    return (

        <div>
                <input type="radio" id={choice} name={choice} value={choice} />
                    <label for={choice}>{choice}</label>
        </div>
  
    )
  }
  
  
  export default RadioButton