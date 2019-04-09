import React, {useState} from 'react';


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
    let len = cities.length;
    function randomCities (e, cities) {
        let randCiti = [Math.floor(Math.random() * len)];
        setCities(cities[randCiti]);
        return cities
    }
    // let citki = cities.map((cit, i) => {
    //     return(
    //     <div key={i}>
    //         {cit.nameCity}
    //     </div>)
    //     }
    // )
    
    console.log(cities.nameCity);
    return(
        <div>
            {/* {citki} */}
            {cities.nameCity}
            <button onClick={e => randomCities(e, cities)}> Change</button>
        </div>
        
    )
}