import React from 'react';

function ModalCheckbox({ name }) {

    return (


        <div className="m-2">


            <input className="skillCheck" type="checkbox" id={name} name={name} value={name} />
            <label for={name}>  {name}</label>
            <br />

        </div>



    )
}


export default ModalCheckbox