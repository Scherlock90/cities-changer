import React from 'react';

export default function AppView({ ...props }) {
    return (
        <div className="containerCities">
            <div className="container">
                <div className="closerContainer">
                    <div
                        className="citiesShow cit1"
                    >
                        {props.citiesArray}
                    </div>
                    <div className="bg"></div>
                    <div className="citiesShow2 cit2">
                        <a
                            className="waves-effect waves-light  lime accent-2 btn"
                            onClick={props.randomCitiesFunc}
                        >
                            Random Cities
                        </a>
                    </div>
                    <div className="bg"></div>
                    <div className="citiesShow3 cit3">
                        {props.children}
                    </div>
                    <div className="bg"></div>
                    {props.footer}
                </div>
            </div>
        </div>
    )
}