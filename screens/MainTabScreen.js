import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

function MainTabScreen() {
    return(
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        activeTintColor: '#ff7b00',
    }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
                <Icon name="ios-home" color={color} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Notifications" component={DetailStackScreen} options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({color}) => (
                <Icon name="ios-notifications" color={color} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
                <Icon name="ios-person" color={color} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Explore" component={ExploreScreen} options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26}/>
            ),
        }}/>
      </Tab.Navigator>
    );
}

export default MainTabScreen;

function HomeStackScreen({navigation}) {
    return (
      <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#ff7b00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#ff7b00" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}/>
      </HomeStack.Navigator>
    );
}
  
function DetailStackScreen({navigation}) {
    return(
        <DetailStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#ff7b00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            }
        }}>
        <DetailStack.Screen name="Details" component={DetailsScreen} options={{
            title:'Details',
            headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#ff7b00" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }}/>
        </DetailStack.Navigator>
    );
}