import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state
    const currentCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === capitalId,
    )
    const countryName = currentCountry[0].country

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              value={capitalId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="line"> is capital of which country?</p>
          </div>
          <h1 className="country">{countryName}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
