import React, {useState} from 'react';

export default function ChildComponent (props) {
    const [propCities, setPropCities] = useState(props.cities)

    return(
        <div key={props.activeCity} >
            {propCities[props.activeCity].nameCity}
        </div>
    )
}