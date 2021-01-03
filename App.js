import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, Text, Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Footer from './components/footer'
import Category from './components/category'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      // <View style={styles.mainView}>
      //   <StatusBar hidden />
      //   <Header style={styles.header} />
      //   <Category style={styles.category} />
      //   <Footer style={styles.footer} />
      // </View>
      <NavigationContainer>
        <StatusBar hidden />
        <Category style={styles.category} />
        <Footer style={styles.footer} />
      </NavigationContainer>
    )
  };
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center'
  },
  category: {
    flex: 1
  },
  footer: {
    flex: 1
  }
})
