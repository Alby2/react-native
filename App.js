import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Compte from './pages/Compte';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={
          {
            title:"Accueil",
            headerTintColor:"white",
            headerStyle:{
              backgroundColor:"#0cf"
            },
            headerTitleStyle:{
              fontWeight:"bold"
            }
            

          }
        } />
        <Stack.Screen name="Compte" component={Compte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
