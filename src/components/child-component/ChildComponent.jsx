import React from 'react';

export const ChildComponent = ({ cities, activeCity }) =>
    <div key={activeCity}>
        {cities[activeCity].nameCity}
    </div>