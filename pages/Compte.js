import React from 'react'
import { View,Text } from 'react-native'
import { Button } from 'react-native'


const Compte = ({navigation}) => {
  return (
    <View>
        <Text> Mon Compte</Text>
        <Button title="Allez sur la page Compte" onPress={()=> navigation.navigate('Home')}/>
    </View>
  )
}

export default Compte