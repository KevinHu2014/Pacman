
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import MainMap from './MainMap';


const start = React.createClass({
  onPress() {
    const { navigator } = this.props;
    if (navigator) {
            navigator.push({
                name: 'MainMap',
                component: MainMap,
                
            });
        }
  },
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient 
        colors={['#00c6ff', '#0072ff']} 
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.blank} />
          <View style={styles.Logo}>
            <Animatable.Image 
                animation="lightSpeedIn" iterationCount={1}
                source={
                  require('../Img/Icon.png')// eslint-disable-line global-require
                } 
                style={{ width: 180, height: 180 }}
            />
          </View>
          <View style={styles.blank} />
          <View style={styles.start}>
            <Animatable.Text 
                style={styles.welcome} delay={1000}
                animation="tada" iterationCount="infinite"
                onPress={this.onPress}
            >
              {'START'}
            </Animatable.Text>
          </View>
          <View style={styles.blank} />
        </LinearGradient>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  blank: {
    flex: 1,
  },
  start: {
    flex: 2,
  },
  Logo: {
    flex: 3,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
	},
});

module.exports = start;
