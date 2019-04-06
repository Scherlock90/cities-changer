import React from 'react';
import './App.css';

// const cities = [
//   {
//     nameCity: 'Kielce'
//   },
//   {
//     nameCity: 'Rzeszów'
//   },
//   {
//     nameCity: 'Białystok'
//   }
// ]
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          id: 1,
          nameCity: 'Kielce'
        },
        {
          id: 2,
          nameCity: 'Rzeszów'
        },
        {
          id: 3,
          nameCity: 'Białystok'
        }
      ]
    };
  }

  onCitiesHandler = (e) => {
    e.preventDefault();
    let idCities = this.state.cities.map(( id, i) => (
      <ul key={i}>
          {id.id}
          {id.nameCity}
      </ul>));
    this.setState({
      cities: [
        {
          id: idCities,
          nameCity: idCities
        }
      ]
    })
  }

  render() {
    return (
      <div className="containerCities">
        <div className="container">
          <div className="citiesShow">
            {this.state.cities.map((city, i) => (
              <ul key={i}>
                  {city.nameCity}
                  {city.id}
              </ul>
            ))
            }
            {/* {citiesProps} */}
          </div>
          <div className="citiesShow2">
              <button onClick={this.onCitiesHandler}>Cities Changer</button>
          </div>
        </div>
      </div>
    )
  }
}
