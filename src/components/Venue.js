import React from 'react'
import { Text } from 'react-native'
import { Card, CardSection } from './common/index'

const Venue = ({ name, avg_price }) => {
  return (
    <Card>
      <CardSection>
        <Text> {name} </Text>
      </CardSection>
      <CardSection style={{flexDirection: 'column',}}>
        <Text> Average Prices </Text>
        <Text> Beer: {avg_price.beer}</Text>
        <Text> Cocktail: {avg_price.cocktail}</Text>
        <Text> Premium: {avg_price.premium}</Text>
        <Text> Spirit: {avg_price.spirit}</Text>
        <Text> Wine: {avg_price.wine}</Text>
      </CardSection>
    </Card>
  )
}

export default Venue
