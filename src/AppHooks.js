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
                    <a class="waves-effect waves-light  lime accent-2 btn" onClick={e => randomCities(e)}>Random Cities</a>
                </div>
                <div className="citiesShow3">
                    <ChildComponent cities={cities} activeCity={activeCity} />
                </div>
            </div>
        </div>
    )
};



