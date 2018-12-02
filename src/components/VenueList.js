import React, {Component} from 'react'
import { ScrollView, Text } from 'react-native'
import Venue from './Venue'

class VenueList extends Component {
  state = {
    venues: []
  }
  
  componentWillMount(){
    return fetch('https://froogalapp.herokuapp.com/venues.json?budget=100&sort=rating')
        .then((response) => response.json())
        .then((responseJson) => {
          venues = responseJson.venues
          this.setState({ venues })
        })
    }
  
  render() {
    return (
      <ScrollView>
        {this.state.venues.map( venue => {
          return (
            <Venue 
              key={venue.name}
              name={venue.name}
              avg_price={venue.avg_price}
            />)
        })}
        
      </ScrollView>
    )
  }
}

export default VenueList
