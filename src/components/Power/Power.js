import React, { useState } from 'react';

const Power = () => {
    return (
        <div>
            <Displaypower name="NoaKhali" district="Bivag"></Displaypower>
            <Displaypower name="Komilla" district="ETOR"></Displaypower>
            <Displaypower name="B.Baria" district="Maramari"></Displaypower>
        </div>
    );
};

const Displaypower = (props) => {
    const [power, setPower] = useState(1);
    const dPower = ()=>{
        const newPower = power * 2;
        setPower(newPower);
    }
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Speciality: {props.district}</p>
            <p>Power: {power}</p>

            <button onClick={dPower}>Increase Power</button>
        </div>
    );
};

export default Power;