import React, {useState} from 'react';


export default function AppHooks () {
    const [cities, setCities] = useState([
        {
            nameCity: 'Kraków'
        },
        {
            nameCity: "Kielce"
        },
        {
            nameCity: "Białystok"
        }
    ])
    const [activeCity, setActiveCity] = useState(0);

    let len = cities.length;

    function randomCities (activeCity) {
        setActiveCity(Math.floor(Math.random() * len))
        return activeCity
    }
    // function randomCities (e, cities) {
    //     let randCiti = [Math.floor(Math.random() * len)];
    //     setCities(cities[randCiti]);
    //     return cities
    // }
    console.log(cities[activeCity].nameCity);
    return(
        <div key={activeCity}>
            {cities[activeCity].nameCity}
            <button onClick={e => randomCities(e)}> Change</button>
        </div>
    )
}