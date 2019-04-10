import React, {useState} from 'react';

function ChildComponent (props) {
    console.log(props.activeCity)
    let citiesProps = props.cities.map((cit, i) => {
        return (
            <div key={i}>
                {cit.nameCity}
            </div>
        )
    })
    return(
        <div key={props.activeCity}>
            {citiesProps[props.activeCity]}
            {props.children}
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
                    <ChildComponent cities={cities} activeCity={activeCity} />
                </div>
            </div>
        </div>
    )
};



