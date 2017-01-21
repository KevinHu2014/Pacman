'use strict';

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';

import {
  Alert,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const accessToken = 'pk.eyJ1IjoiaHNpYW5neXVodSIsImEiOiJjaWxjZmIwbmcydGdzdHlseHUyaWt4dTl6In0.grkL-R6ioaY38yuWIB-qRA';
Mapbox.setAccessToken(accessToken);
var {height, width} = Dimensions.get('window');


var MainMap = React.createClass({
  getInitialState() {
    return {
      center: {
        latitude: 25.03569,
        longitude: 121.43289
      },
      zoom: 18,
      zoomOut: false,
      userTrackingMode: Mapbox.userTrackingMode.follow,
      
      i: 5,
      UserLat: 25.035770510088796,
      UserLon: 121.43201887607574,
      newLat: 25.035770510088796,
      newLon: 121.43201887607574,
      annotations: [
      
      {
        coordinates: [ 25.034210312568298, 121.43341898918152],
        type: 'point',
        id: '0',
        annotationImage: {
            source: { uri: 'bean' },
            height: 12,
            width: 12
          },
      },
      {
        coordinates: [ 25.03419330095951, 121.43342703580856],
        type: 'point',
        id: '1',
        annotationImage: {
            source: { uri: 'bean' },
            height: 6,
            width: 6
          },
      },
      {
        coordinates: [ 25.03671099340075, 121.43473863601686],
        type: 'point',
        title: '道館',
        subtitle: '于樞機墓園',
        id: '于樞機墓園道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 5,
            width: 5
          },
      },
      {
        coordinates: [ 25.03375828901878, 121.4333063364029],
        type: 'point',
        title: '道館',
        subtitle: '耕莘樓',
        id: '耕莘樓道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 5,
            width: 5
          },
      },
      {
        coordinates: [ 25.03323335635505, 121.43434435129166],
        type: 'point',
        title: '道館',
        subtitle: '野聲樓和焯炤館',
        id: '野聲樓和焯炤館道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 5,
            width: 5
          },
      },
      {
        coordinates: [ 25.03418844049941, 121.43413782119751],
        type: 'point',
        title: '道館',
        subtitle: '輔園餐廳',
        id: '輔園餐廳道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 5,
            width: 5
          },
      },
      {
        coordinates: [ 25.03633674509128, 121.43322587013245],
        type: 'point',
        title: '道館',
        subtitle: '文華樓',
        id: '文華樓道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 5,
            width: 5
          },
      },
      {
        coordinates: [ 25.03784102195161, 121.43238097429276],
        type: 'point',
        title: '道館',
        subtitle: '積健樓',
        id: '積健樓道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 5,
            width: 5
          },
      },
      {
        coordinates: [ 25.037556693167364, 121.43070995807649],
        type: 'point',
        title: '道館',
        subtitle: '進修部大樓',
        id: '進修部大樓道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 5,
            width: 5
          },
      },
      {
        coordinates: [ 25.035909031339482, 121.43050879240037],
        type: 'point',
        title: '道館',
        subtitle: '濟時樓',
        id: '濟時樓道館',
        annotationImage: {
            source: { uri: 'bean' },
            height: 7,
            width: 7
          },

      },
      
     
      ]
      
    }
  },
  onUpdateUserLocation(location){
    //console.log(location.latitude);
    //console.log(location.longitude);
    this._map && this._map.setCenterCoordinate(location.latitude, location.longitude);
    this.setState({
      UserLat: location.latitude,
      UserLon: location.longitude
    });
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [location.latitude,location.longitude],
        type: 'point',
        annotationImage: {
            source: { uri: 'pacman' },
            height: 40,
            width: 40
          },
        id: 'Pacman'
      }]
    });

  },

  calculateDistance(Lat: number, Lon: number){
    let xd = Lat - this.state.UserLat;
    let yd = Lon - this.state.UserLon;
    //經度一度大概是111公里
    //緯度一度大概是110公里
    //為了計算方便，統一當做110公里來做計算好了
    let distance = Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2))*110000;
    //110*1000 = 110000公尺
    //console.log(Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2)));
    return distance;
  },
  onOpenAnnotation(annotation) {
    console.log(annotation.title);
    //console.log(annotation.latitude);
    //console.log(annotation.longitude);
    let distance=this.calculateDistance(annotation.latitude,annotation.longitude);
    console.log(distance);//單位為公尺
    
    
  },
  onPressIn_explore(){
    let temp = 19;
    if(this.state.zoomOut != true){
      temp = 16;
    }
    this._map && this._map.setZoomLevel(temp)
    this.setState({
      zoomOut: !(this.state.zoomOut),
    });
  },
  onPressOut_explore() {
    
    
    this.setState({press_explore: false});
    var MonsterLat = [];//Lat
    var MonsterLon = [];//Lon
    for(this.state.i=0;this.state.i<5;this.state.i++){
      let distance = 0.00003;
      let ID = 'No.'+ this.state.i;
      let x = Math.floor(Math.random() * 20 - 10);//-10~10
      let y = Math.floor(Math.random() * 20 - 10);//-10~10
      this.state.newLat = this.state.UserLat + x*distance;
      this.state.newLon = this.state.UserLon + y*distance;
      //console.log(x);
      //console.log(y);
      //console.log(this.state.newLat);
      //console.log(this.state.newLon);
      MonsterLat[this.state.i] = this.state.newLat;
      MonsterLon[this.state.i] = this.state.newLon;
      
    }
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [MonsterLat[0],MonsterLon[0]],
        type: 'point',
        title: '我是怪物',
        annotationImage: {
            source: { uri: 'green' },
            height: 45,
            width: 45
          },
        id: 'M0'
      },{
        coordinates: [MonsterLat[1],MonsterLon[1]],
        type: 'point',
        title: '我是怪物',
        annotationImage: {
            source: { uri: 'green' },
            height: 45,
            width: 45
          },
        id: 'M1'
      },{
        coordinates: [MonsterLat[2],MonsterLon[2]],
        type: 'point',
        title: '我是怪物',
        annotationImage: {
            source: { uri: 'yellow' },
            height: 45,
            width: 45
          },
        id: 'M2'
      },{
        coordinates: [MonsterLat[3],MonsterLon[3]],
        type: 'point',
        title: '我是怪物',
        annotationImage: {
            source: { uri: 'green' },
            height: 45,
            width: 45
          },
        id: 'M3'
      },{
        coordinates: [MonsterLat[4],MonsterLon[4]],
        type: 'point',
        title: '我是怪物',
        annotationImage: {
            source: { uri: 'red' },
            height: 45,
            width: 45
          },
        id: 'M4'
      },

      ]
    });

    
  },
  render() {
   
    return (
      <View style={styles.container}>  
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={false}
          scrollEnabled={true}
          zoomEnabled={false}
          pitchEnabled={false}
          showsUserLocation={false}
          styleURL={'mapbox://styles/hsiangyuhu/ciy6xumka000b2smutk8cjmpc'}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          annotationsAreImmutable={true}
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />
        <TouchableOpacity
                onPressIn={this.onPressIn_explore}
                //onPressOut={this.onPressOut_explore}
                style={{borderRadius: 100,position: 'absolute',left: (width-130)/2,top: height-170}}>
                    <Image source={require('../Img/explore_new.png')} 
                         style={{width:130,height:130}}/>
        </TouchableOpacity>
      </View>     
    );
  }

 
});

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  map: {
    flex: 1,
  },
  
});

module.exports = MainMap;