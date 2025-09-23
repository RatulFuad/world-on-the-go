import React, { useState } from 'react';
import './country.css';
const Country = ({country,  handleVisitedCountries={handleVisitedCountries}}) => {

    const [visited, setVisited] = useState(false);

const handleVisited =()=>{
    // console.log("kkkkkkkkkkkk")
    setVisited(visited ? false : true)
     handleVisitedCountries(country)
}

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <h4>Area: {country.area.area}
                {country.area.area > 300000 ? "  Big country" : "  small country"}
            </h4>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;
















































