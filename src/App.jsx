import React, { useState, useEffect } from 'react';
import { AppView, Footer, ChildComponent } from './components/index';

import { citiesArrayInPoland } from './data/Data'

import './styles/main.scss';

export default function App() {
    const [activeCity, setActiveCity] = useState(0);
    const [citiesArray, setCitiesArray] = useState(null);

    useEffect(() => {
        setCitiesArray(citiesArrayInPoland)
        return () => setCitiesArray(citiesArrayInPoland)
    }, [citiesArray]);

    function randomCities() {
        const len = citiesArray.length;
        setActiveCity(Math.floor(Math.random() * len))
    };

    return (
        <>
            {
                citiesArray !== null
                ?
                    (
                        <AppView
                            citiesArray={citiesArray[activeCity].nameCity}
                            onClick={e => randomCities(e)}
                            footer={ <Footer />}
                        >
                            <ChildComponent
                                cities={citiesArray}
                                activeCity={activeCity}
                            />
                        </AppView>
                    )
                : <div>Loading Cities...</div>
            }
        </>
    )
}