
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import start from './start';


export default class NavInit extends React.Component {
    render() {
        let defaultName = 'start';
        let defaultComponent = start;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          //啟動app時，所看到的初始頁面
          configureScene={(route) => {
            return Navigator.SceneConfigs.FadeAndroid;
            //轉場動畫效果
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
} 

module.exports =  NavInit;