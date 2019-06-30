import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import { News } from './News';
import { Settings } from './Settings';
import { NewsDetail } from './NewsDetail';

const NewsStack = createStackNavigator({
    News: News,
    NewsDetail: NewsDetail,
  });

  const SettingsStack = createStackNavigator({
    Settings: Settings,
    NewsDetail: NewsDetail,
  });

const AppNavigator = createBottomTabNavigator({
  News: {
    screen: NewsStack,
  },
  Settings: {
      screen: SettingsStack,
  },
});

export default createAppContainer(AppNavigator);