import React, {useState} from 'react';

function ChildComponent (props) {
    return(
        <div>
            {props.children}
            Child Component
            {props.cities.map((cit, i) => {
                return (
                    <div key={i}>
                        {cit.nameCity}
                    </div>
                )
            })}
        </div>
    )
}

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
        <div className="containerCities">
            <div className="container">
                <div className="citiesShow" key={activeCity}>
                    {cities[activeCity].nameCity}
                </div>
                <div className="citiesShow2">
                    <button className="buttonStyle" onClick={e => randomCities(e)}> Change</button>
                </div>
                <div className="citiesShow3">
                    <ChildComponent cities={cities} />
                </div>
            </div>
        </div>
    )
}



