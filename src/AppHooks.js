import React, {useState, useEffect} from 'react';
import './AppHooks.css';
import Footer from './Footer';

function ChildComponent (props) {
    const [propCities, setPropCities] = useState(props.cities)

    useEffect(() => {
      // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render! ' + propCities[props.activeCity].nameCity);

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
    })

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
        },
        {
            nameCity: "Wrocław"
        },
        {
            nameCity: "Gdańsk"
        },
        {
            nameCity: "Poznań"
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
                <div>
                    <div className="citiesShow cit1" key={activeCity}>
                        {cities[activeCity].nameCity}
                    </div>
                    <div className="bg"></div>
                    <div className="citiesShow2 cit2">
                        <a className="waves-effect waves-light  lime accent-2 btn" onClick={e => randomCities(e)}>Random Cities</a>
                    </div>
                    <div className="bg"></div>
                    <div className="citiesShow3 cit3">
                        <ChildComponent cities={cities} activeCity={activeCity} />
                    </div>
                    <div className="bg"></div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}