import React from 'react'
import { Text } from 'react-native'
import { Card, CardSection } from './common/index'

const Venue = ({ name }) => {
  return (
    <Card>
      <CardSection>
        <Text>
          {name}
        </Text>
      </CardSection>
    </Card>
  )
}

export default Venue
