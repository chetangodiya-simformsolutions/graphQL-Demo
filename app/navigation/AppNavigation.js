import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Navigations } from '../constants';

import HomeScreen from '../modules/Home/HomeScreen';
import PostScreen from '../modules/Post/PostScreen';
import { navigationRef } from './NavigationRefs';
import LoginScreen from '../modules/Login/LoginScreen';
import Splash from '../components/Splash';
import CreatePostScreen from '../modules/CreatePost/CreatePostScreen';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator mode="modal" >
    <HomeStack.Screen name={Navigations.Home} component={HomeScreen} />
    <HomeStack.Screen
      name={Navigations.CreatePost}
      component={CreatePostScreen}
      options={{
        headerShown: false,
        cardStyle:{
          backgroundColor:'transparent'
        },
        cardOverlay:true
      }}
    />
    <HomeStack.Screen name={Navigations.Post} component={PostScreen} />
  </HomeStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={Navigations.Login} component={LoginScreen} />
  </AuthStack.Navigator>
);

const SplashStack = createStackNavigator();
const SplashStackScreen = () => (
  <SplashStack.Navigator headerMode="none">
    <SplashStack.Screen name={Navigations.Splash} component={Splash} />
  </SplashStack.Navigator>
);

const RootStack = createStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator headerMode="none" >
        <RootStack.Screen
          name={Navigations.Splash}
          component={SplashStackScreen}
        />
        <RootStack.Screen
          name={Navigations.Login}
          component={AuthStackScreen}
        />
        <RootStack.Screen name={Navigations.Home} component={HomeStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
