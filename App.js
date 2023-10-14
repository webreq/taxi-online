import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/StackScreen/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './app/StackScreen/MapScreen';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <SafeAreaView className="flex-1 h-full w-full mt-6" >
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='homeScreen' component={HomeScreen} />
            <Stack.Screen name='mapScreen' component={MapScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}


