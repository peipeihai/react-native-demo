import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import { News } from './News';
import { Settings } from './Settings';
import { NewsDetail } from './NewsDetail';

const NewsStack = createStackNavigator({
    News: {
        screen: News,
        tabBarLabel: '新闻',
    },
    NewsDetail: NewsDetail,
  });

  const SettingsStack = createStackNavigator({
    Settings: Settings,
    NewsDetail: NewsDetail,
  });

const AppNavigator = createBottomTabNavigator({
  News: {
    screen: NewsStack,
    navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused }) => {
            if (!focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../assets/images/home.jpg')}></Image>
                );
            }  else {
                return (
                    <Image style={styles.tabBarIcon} source={require('../assets/images/home-focused.jpg')}></Image>
                );
            }
        },
    },
  },
  Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: '设置',
        tabBarIcon: ({ focused }) => {
            if (!focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../assets/images/settings.jpg')}></Image>
                );
            }  else {
                return (
                    <Image style={styles.tabBarIcon} source={require('../assets/images/settings-focused.png')}></Image>
                );
            }
        },
    },
  },
});


const styles = {
    tabBarIcon: {
        width: 24,
        height: 24,
    },
}

export default createAppContainer(AppNavigator);