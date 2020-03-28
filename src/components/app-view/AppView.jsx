import React from 'react';

import { ContainerRound } from './container-round/ContainerRound';

export const AppView = ({ citiesArray, onClick, children, footer }) =>
    <div className="container-cities">
        <div className="container">
            <div className="closer-container">
                <ContainerRound
                    className={"cities-show cit-1"}
                    children={citiesArray}
                />
                <ContainerRound
                    className={"cities-show-2 cit-2"}
                    children={
                            <div
                                className="waves-effect waves-light  lime accent-2 btn"
                                {...{ onClick }}
                            >
                                Random Cities
                            </div>
                        }
                    />
                <ContainerRound
                    {...{ children }}
                    className={"cities-show-3 cit-3"}
                />
                { footer }
            </div>
        </div>
    </div>