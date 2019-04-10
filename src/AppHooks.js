import React, {useState, useEffect} from 'react';
import './App.css';

function ChildComponent (props) {
    const [propCities, setPropCities] = useState(props.cities)

    useEffect(() => {
      // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
    })
    

    console.log(propCities.nameCity);
    return(
        <div key={props.activeCity} >
            {propCities[props.activeCity].nameCity}
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

    function randomCities (activeCity) {
        let len = cities.length;
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
                    <a className="waves-effect waves-light  lime accent-2 btn" onClick={e => randomCities(e)}>Random Cities</a>
                </div>
                <div className="citiesShow3">
                    <ChildComponent cities={cities} activeCity={activeCity} />
                </div>
            </div>
        </div>
    )
};



