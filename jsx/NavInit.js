
import React from 'react';
import {
  Navigator,
} from 'react-native';
import start from './start';


export default class NavInit extends React.Component {
    render() {
        const defaultName = 'start';
        const defaultComponent = start;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          //啟動app時，所看到的初始頁面
          configureScene={() =>
            Navigator.SceneConfigs.FadeAndroid
          }
          renderScene={(route, navigator) => {
            const Component = route.component;
            return <Component {...route.params} navigator={navigator} />;
          }} 
        />
        );
    }
} 

module.exports = NavInit;
