import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';
import HelpDesk from '../Screen/HelpDesk';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Tab=createBottomTabNavigator();
export default function TabNavigation() {
  return (
   <Tab.Navigator screenOptions={{
    headerShown:false
   }}>
    <Tab.Screen name='home' component={HomeScreenNavigation} 
    options={{
        tabBarIcon:({color,size})=>(
            <Ionicons name="home" size={size} color={color} />
        )
    }}
    />
    <Tab.Screen name='my-course' component={MyCourse} 
     options={{
        tabBarIcon:({color,size})=>(
            <Ionicons name="book" size={size} color={color} />
        )
    }}/>
    <Tab.Screen name='leaderboard' 
    component={LeaderBoard} 
    options={{
        tabBarIcon:({color,size})=>(
            <MaterialIcons name="leaderboard" size={size} color={color} />
        )
    }}/>
    <Tab.Screen name='Live Class' 
    component={ProfileScreen} 
    options={{
        tabBarIcon:({color,size})=>(
             <FontAwesome name="video-camera" size={size} color={color}/>
        )
    }}/>
    <Tab.Screen name='Help Desk' 
    component={HelpDesk} 
    options={{
        tabBarIcon:({color,size})=>(
            <FontAwesome5 name="hands-helping" size={size} color={color} />
        )
    }}/>
   </Tab.Navigator>
  )
}