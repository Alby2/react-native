import { View,Text } from "react-native"
import { Button } from "react-native"



const Home = ({navigation}) => {
  return (
    <View><Text>sdsdsd</Text><Button title="Allez sur la apage Compte" onPress={()=> navigation.push('Compte')}/></View>
  )
}

export default Home