import React, {useState} from 'react';

export default function AppHooks () {
    const [cities, setCities] = useState([
        {
            nameCity: 'Kraków '
        },
        {
            nameCity: 'Kielce '
        },
        {
            nameCity: 'Białystok '
        }
    ]);
    const [random, setRandom] = useState(0);

    function getRandom(items) {
        return items[Math.floor(Math.random()*items.length)];
      }

    function onCitiesChanger (e, cities) {
        setCities(cities);
        return cities
    }
    
    function handleGetNameClick (e, cities) {
        setCities(getRandom(cities))
        return cities
      };

    const listCities = cities.map((cit) => cit.nameCity);
    return(
         <div className="containerCities">
            <div className="container">
                <div className="citiesShow">
                    {cities.nameCity}
                    {listCities.filter((cit2, index) => (
                        <CitiesThumb key={index} cities={cit2}/>
                    ))}
                </div>
            <div className="citiesShow2">
                <button onClick={onCitiesChanger}>Cities</button>
                <button onClick={handleGetNameClick}>Cit</button>
                {/* <button onClick={() => setCities(cities[0])}>Cities</button> */}
                {/* <button onClick={() => setRandom(random + 1)}>Random</button> */}
          </div>
        </div>
      </div>
    )
}

const CitiesThumb = (props) => (
    <div className="spacing">
      {props.cities.map((name, i) => {
        return (
          <div className="spacing" key={i}>
              {name.nameCity}
           </div> 
        )
      })}
    </div>
  );