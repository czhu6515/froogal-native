import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = ({ onPress, children }) => {
  const {buttonStyle, buttonTextStyle} = styles

  return(
    <TouchableOpacity 
      onPress={onPress} 
      style={buttonStyle}
    >
      <Text style={buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button }
