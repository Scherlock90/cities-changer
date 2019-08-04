import React, { useState } from 'react';
import AppView from './Components/AppView';
import ChildComponent from './Components/ChildComponent';
import Footer from './Components/Footer';
import './Styles/main.scss';

export default function App() {
    const [activeCity, setActiveCity] = useState(0);
    const [citiesArray, setCitiesArray] = useState([
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
    ]);

    function randomCities(activeCity) {
        let len = citiesArray.length;
        setActiveCity(Math.floor(Math.random() * len))
        return activeCity
    };

    return (
        <AppView 
            citiesArray={citiesArray[activeCity].nameCity} 
            randomCitiesFunc={e => randomCities(e)} 
            footer={ <Footer />} 
        >
            <ChildComponent
                cities={citiesArray}
                activeCity={activeCity}
            />
        </AppView>
    )
}