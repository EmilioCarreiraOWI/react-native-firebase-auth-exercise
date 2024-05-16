import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoggedInTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = focused ? 'ios-person' : 'ios-person-outline';
        } else if (route.name === 'Register') {
          iconName = focused ? 'ios-create' : 'ios-create-outline';
        } else if (route.name === 'Login') {
          iconName = focused ? 'ios-log-in' : 'ios-log-in-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="RegisterScreen" component={RegisterScreen} />
    </Tab.Navigator>
  );
}

export default function App() {

  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setLoggedIn(true)
        console.log("User logged in..." + user.email)
      } else {
        setLoggedIn(false)
        console.log("No user logged in...")
      }
    })
    return unsubscribe
  }, [])
  

  return (
    <>
      {LoggedIn ? (
        <ProfileScreen />
      ):(
        <NavigationContainer>
          <LoggedInTabs />
        </NavigationContainer>
      )}
    </>
    
  );
}

