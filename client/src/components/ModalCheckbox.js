import React from 'react';

function ModalCheckbox({ name, onClick }) {

    return (


        <div className="m-2">


            <input onClick={onClick} className="skillCheck" type="checkbox" id={name} name="skills" value={name} />
            <label for={name}>  {name}</label>
            <br />

        </div>



    )
}


export default ModalCheckbox