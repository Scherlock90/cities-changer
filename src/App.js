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
          nameCity: 'Kielce'
        },
        {
          nameCity: 'Rzeszów'
        },
        {
          nameCity: 'Białystok'
        }
      ]
    };
  }

  onCitiesHandler = (e) => {
    e.preventDefault();
    console.log('cities changer');
    this.setState({
      cities: [
        {
          nameCity: 'Chicago'
        }
      ]
    })
  }

  render() {
    // const citiesProps = this.props.cities.map( city => city {
      
    // });
    return (
      <div className="containerCities">
        <div className="container">
          <div className="citiesShow">
            {this.state.cities.map((city, i) => (
              <ul key={i}>
                  {city.nameCity}
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
