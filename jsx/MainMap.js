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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';

var MainMap = React.createClass({
  getInitialState() {
    return {
      center: {
        latitude: 25.03569,
        longitude: 121.43289
      },
      zoom: 19,
      zoomOut: false,
      userTrackingMode: Mapbox.userTrackingMode.none,
      Score: 0,
      UserLat: 25.035770510088796,
      UserLon: 121.43201887607574,
      annotations: [
      
            {
        coordinates: [ 25.03421031256830, 121.43342248918152],
        type: 'point',
        id: '0',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03417628936830, 121.43343650442152],
        type: 'point',
        id: '1',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03414226616830, 121.43345051966152],
        type: 'point',
        id: '2',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03410824296829, 121.43346453490152],
        type: 'point',
        id: '3',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03407421976829, 121.43347855014152],
        type: 'point',
        id: '4',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03404019656829, 121.43349256538151],
        type: 'point',
        id: '5',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03400617336829, 121.43350658062151],
        type: 'point',
        id: '6',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03397215016829, 121.43352059586151],
        type: 'point',
        id: '7',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03393812696829, 121.43353461110151],
        type: 'point',
        id: '8',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03390410376829, 121.43354862634150],
        type: 'point',
        id: '9',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03387008056829, 121.43356264158150],
        type: 'point',
        id: '10',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03383605736828, 121.43357665682150],
        type: 'point',
        id: '11',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03380203416828, 121.43359067206150],
        type: 'point',
        id: '12',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03376801096828, 121.43360468730150],
        type: 'point',
        id: '13',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03373398776828, 121.43361870254149],
        type: 'point',
        id: '14',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03369996456828, 121.43363271778149],
        type: 'point',
        id: '15',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03366594136828, 121.43364673302149],
        type: 'point',
        id: '16',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03363191816828, 121.43366074826149],
        type: 'point',
        id: '17',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03359789496827, 121.43367476350149],
        type: 'point',
        id: '18',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03356387176827, 121.43368877874148],
        type: 'point',
        id: '19',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03352984856827, 121.43370279398148],
        type: 'point',
        id: '20',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03349582536827, 121.43371680922148],
        type: 'point',
        id: '21',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03346180216827, 121.43373082446148],
        type: 'point',
        id: '22',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03342777896827, 121.43374483970148],
        type: 'point',
        id: '23',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03339375576827, 121.43375885494147],
        type: 'point',
        id: '24',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03335973256827, 121.43377287018147],
        type: 'point',
        id: '25',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03332570936826, 121.43378688542147],
        type: 'point',
        id: '26',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03329168616826, 121.43380090066147],
        type: 'point',
        id: '27',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03325766296826, 121.43381491590146],
        type: 'point',
        id: '28',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322363976826, 121.43383012514147],
        type: 'point',
        id: '29',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03318961656826, 121.43384533438147],
        type: 'point',
        id: '30',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03315559336826, 121.43386054362148],
        type: 'point',
        id: '31',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03312157016826, 121.43387575286148],
        type: 'point',
        id: '32',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03308754696825, 121.43389096210149],
        type: 'point',
        id: '33',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03305352376825, 121.43390617134149],
        type: 'point',
        id: '34',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03301950056825, 121.43392138058149],
        type: 'point',
        id: '35',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03298547736825, 121.43393658982150],
        type: 'point',
        id: '36',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03295145416825, 121.43395179906150],
        type: 'point',
        id: '37',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03291743096825, 121.43396700830151],
        type: 'point',
        id: '38',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03288340776825, 121.43398221754151],
        type: 'point',
        id: '39',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03284938456824, 121.43399742678152],
        type: 'point',
        id: '40',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03281536136824, 121.43401263602152],
        type: 'point',
        id: '41',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03278133816824, 121.43402784526153],
        type: 'point',
        id: '42',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03274731496824, 121.43404305450153],
        type: 'point',
        id: '43',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03271329176824, 121.43405826374153],
        type: 'point',
        id: '44',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03267926856824, 121.43407347298154],
        type: 'point',
        id: '45',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03264524536824, 121.43408868222154],
        type: 'point',
        id: '46',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03426134738056, 121.43355578184126],
        type: 'point',
        id: '47',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03422658431811, 121.43357012582861],
        type: 'point',
        id: '48',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419182125566, 121.43358446981595],
        type: 'point',
        id: '49',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03415705819321, 121.43359881380330],
        type: 'point',
        id: '50',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03412229513076, 121.43361315779065],
        type: 'point',
        id: '51',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03408753206831, 121.43362750177799],
        type: 'point',
        id: '52',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03405276900585, 121.43364184576534],
        type: 'point',
        id: '53',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03401800594340, 121.43365618975268],
        type: 'point',
        id: '54',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03398324288095, 121.43367053374003],
        type: 'point',
        id: '55',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03394847981850, 121.43368487772737],
        type: 'point',
        id: '56',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03391371675605, 121.43369922171472],
        type: 'point',
        id: '57',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03387895369360, 121.43371356570206],
        type: 'point',
        id: '58',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03384419063114, 121.43372790968941],
        type: 'point',
        id: '59',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03380942756869, 121.43374225367675],
        type: 'point',
        id: '60',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03377466450624, 121.43375659766410],
        type: 'point',
        id: '61',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03373990144379, 121.43377094165145],
        type: 'point',
        id: '62',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03370513838134, 121.43378528563879],
        type: 'point',
        id: '63',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03367037531888, 121.43379962962614],
        type: 'point',
        id: '64',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03363561225643, 121.43381397361348],
        type: 'point',
        id: '65',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03360084919398, 121.43382831760083],
        type: 'point',
        id: '66',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03356608613153, 121.43384266158817],
        type: 'point',
        id: '67',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03353132306908, 121.43385700557552],
        type: 'point',
        id: '68',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03349656000663, 121.43387134956286],
        type: 'point',
        id: '69',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03346179694417, 121.43388569355021],
        type: 'point',
        id: '70',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03342703388172, 121.43390003753755],
        type: 'point',
        id: '71',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03339227081927, 121.43391438152490],
        type: 'point',
        id: '72',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03335750775682, 121.43392872551225],
        type: 'point',
        id: '73',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03332274469437, 121.43394306949959],
        type: 'point',
        id: '74',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03328798163192, 121.43395741348694],
        type: 'point',
        id: '75',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03325321856946, 121.43397175747428],
        type: 'point',
        id: '76',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03321845550701, 121.43398610146163],
        type: 'point',
        id: '77',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03318369244456, 121.43400044544897],
        type: 'point',
        id: '78',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03314892938211, 121.43401478943632],
        type: 'point',
        id: '79',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03311416631966, 121.43402913342366],
        type: 'point',
        id: '80',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03307940325720, 121.43404347741101],
        type: 'point',
        id: '81',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03304464019475, 121.43405782139835],
        type: 'point',
        id: '82',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03300987713230, 121.43407216538570],
        type: 'point',
        id: '83',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03297511406985, 121.43408650937305],
        type: 'point',
        id: '84',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03294035100740, 121.43410085336039],
        type: 'point',
        id: '85',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03290558794495, 121.43411519734774],
        type: 'point',
        id: '86',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03287082488249, 121.43412954133508],
        type: 'point',
        id: '87',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03283606182004, 121.43414388532243],
        type: 'point',
        id: '88',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03280129875759, 121.43415822930977],
        type: 'point',
        id: '89',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03276653569514, 121.43417257329712],
        type: 'point',
        id: '90',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03273177263269, 121.43418691728446],
        type: 'point',
        id: '91',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03269700957024, 121.43420126127181],
        type: 'point',
        id: '92',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03266224650778, 121.43421560525915],
        type: 'point',
        id: '93',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03321634461078, 121.43278330564499],
        type: 'point',
        id: '94',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03321769474910, 121.43282125393550],
        type: 'point',
        id: '95',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03321904488743, 121.43285920222601],
        type: 'point',
        id: '96',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322039502575, 121.43289715051652],
        type: 'point',
        id: '97',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322174516408, 121.43293509880704],
        type: 'point',
        id: '98',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322309530241, 121.43297304709755],
        type: 'point',
        id: '99',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322444544073, 121.43301099538806],
        type: 'point',
        id: '100',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322579557906, 121.43304894367857],
        type: 'point',
        id: '101',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322714571739, 121.43308689196908],
        type: 'point',
        id: '102',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322849585571, 121.43312484025959],
        type: 'point',
        id: '103',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322984599404, 121.43316278855011],
        type: 'point',
        id: '104',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323119613237, 121.43320073684062],
        type: 'point',
        id: '105',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323254627069, 121.43323868513113],
        type: 'point',
        id: '106',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323389640902, 121.43327663342164],
        type: 'point',
        id: '107',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323524654735, 121.43331458171215],
        type: 'point',
        id: '108',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323659668567, 121.43335253000267],
        type: 'point',
        id: '109',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323794682400, 121.43339047829318],
        type: 'point',
        id: '110',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323929696233, 121.43342842658369],
        type: 'point',
        id: '111',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324064710065, 121.43346637487420],
        type: 'point',
        id: '112',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324199723898, 121.43350432316471],
        type: 'point',
        id: '113',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324334737730, 121.43354227145522],
        type: 'point',
        id: '114',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324469751563, 121.43358021974574],
        type: 'point',
        id: '115',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324604765396, 121.43361816803625],
        type: 'point',
        id: '116',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324739779228, 121.43365611632676],
        type: 'point',
        id: '117',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324874793061, 121.43369406461727],
        type: 'point',
        id: '118',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03325009806894, 121.43373201290778],
        type: 'point',
        id: '119',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03325144820726, 121.43376996119829],
        type: 'point',
        id: '120',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323837358389, 121.43275267654849],
        type: 'point',
        id: '121',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03326040255701, 121.43272204745199],
        type: 'point',
        id: '122',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03328243153013, 121.43269141835549],
        type: 'point',
        id: '123',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03330446050324, 121.43266078925899],
        type: 'point',
        id: '124',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03332648947636, 121.43263016016249],
        type: 'point',
        id: '125',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03334851844948, 121.43259953106599],
        type: 'point',
        id: '126',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03337054742259, 121.43256890196949],
        type: 'point',
        id: '127',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03339257639571, 121.43253827287299],
        type: 'point',
        id: '128',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03341460536883, 121.43250764377649],
        type: 'point',
        id: '129',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03343663434194, 121.43247701467999],
        type: 'point',
        id: '130',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03345866331506, 121.43244638558349],
        type: 'point',
        id: '131',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03348069228818, 121.43241575648699],
        type: 'point',
        id: '132',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03350272126129, 121.43238512739049],
        type: 'point',
        id: '133',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03352475023441, 121.43235449829399],
        type: 'point',
        id: '134',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03354677920753, 121.43232386919749],
        type: 'point',
        id: '135',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03356880818064, 121.43229324010099],
        type: 'point',
        id: '136',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03359083715376, 121.43226261100449],
        type: 'point',
        id: '137',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03361286612688, 121.43223198190799],
        type: 'point',
        id: '138',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03363489509999, 121.43220135281149],
        type: 'point',
        id: '139',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03365692407311, 121.43217072371499],
        type: 'point',
        id: '140',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03367895304623, 121.43214009461849],
        type: 'point',
        id: '141',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03370098201934, 121.43210946552199],
        type: 'point',
        id: '142',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03372301099246, 121.43207883642549],
        type: 'point',
        id: '143',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03374503996558, 121.43204820732899],
        type: 'point',
        id: '144',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03376706893869, 121.43201757823249],
        type: 'point',
        id: '145',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03378909791181, 121.43198694913599],
        type: 'point',
        id: '146',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03381112688493, 121.43195632003949],
        type: 'point',
        id: '147',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03383315585804, 121.43192569094299],
        type: 'point',
        id: '148',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03385518483116, 121.43189506184649],
        type: 'point',
        id: '149',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03387721380428, 121.43186443274999],
        type: 'point',
        id: '150',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03389924277740, 121.43183380365349],
        type: 'point',
        id: '151',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03418114980892, 121.43213421106339],
        type: 'point',
        id: '152',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03422003342494, 121.43213152885437],
        type: 'point',
        id: '153',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03425891704096, 121.43212884664536],
        type: 'point',
        id: '154',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03429780065698, 121.43212616443634],
        type: 'point',
        id: '155',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03433668427300, 121.43212348222733],
        type: 'point',
        id: '156',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03437556788903, 121.43212080001831],
        type: 'point',
        id: '157',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03441445150504, 121.43211811780928],
        type: 'point',
        id: '158',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03445333512106, 121.43211543560027],
        type: 'point',
        id: '159',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03449221873709, 121.43211275339125],
        type: 'point',
        id: '160',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03453110235311, 121.43211007118224],
        type: 'point',
        id: '161',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03456998596913, 121.43210738897322],
        type: 'point',
        id: '162',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03460886958515, 121.43210470676421],
        type: 'point',
        id: '163',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03418297248117, 121.43217184580863],
        type: 'point',
        id: '164',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03418479515341, 121.43220948055387],
        type: 'point',
        id: '165',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03418661782565, 121.43224711529911],
        type: 'point',
        id: '166',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03418844049790, 121.43228475004435],
        type: 'point',
        id: '167',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419026317014, 121.43232238478959],
        type: 'point',
        id: '168',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419208584239, 121.43236001953483],
        type: 'point',
        id: '169',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419390851463, 121.43239765428007],
        type: 'point',
        id: '170',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419573118688, 121.43243528902531],
        type: 'point',
        id: '171',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419755385912, 121.43247292377055],
        type: 'point',
        id: '172',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419937653137, 121.43251055851579],
        type: 'point',
        id: '173',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420119920361, 121.43254819326103],
        type: 'point',
        id: '174',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420302187585, 121.43258582800627],
        type: 'point',
        id: '175',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420484454810, 121.43262346275151],
        type: 'point',
        id: '176',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420666722035, 121.43266109749675],
        type: 'point',
        id: '177',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420848989259, 121.43269873224199],
        type: 'point',
        id: '178',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03421031256483, 121.43273636698723],
        type: 'point',
        id: '179',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03421213523708, 121.43277400173247],
        type: 'point',
        id: '180',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03421395790932, 121.43281163647771],
        type: 'point',
        id: '181',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03421578058157, 121.43284927122295],
        type: 'point',
        id: '182',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03421760325382, 121.43288690596819],
        type: 'point',
        id: '183',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03421942592606, 121.43292454071343],
        type: 'point',
        id: '184',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03422124859830, 121.43296217545867],
        type: 'point',
        id: '185',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03422307127055, 121.43299981020391],
        type: 'point',
        id: '186',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03422489394279, 121.43303744494915],
        type: 'point',
        id: '187',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03422671661504, 121.43307507969439],
        type: 'point',
        id: '188',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03422853928728, 121.43311271443963],
        type: 'point',
        id: '189',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423036195953, 121.43315034918487],
        type: 'point',
        id: '190',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423218463177, 121.43318798393011],
        type: 'point',
        id: '191',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423400730402, 121.43322561867535],
        type: 'point',
        id: '192',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423582997626, 121.43326325342059],
        type: 'point',
        id: '193',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423765264850, 121.43330088816583],
        type: 'point',
        id: '194',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423947532075, 121.43333852291107],
        type: 'point',
        id: '195',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03603540146683, 121.43263846635817],
        type: 'point',
        id: '196',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03600082311439, 121.43265279701777],
        type: 'point',
        id: '197',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03596624476196, 121.43266712767736],
        type: 'point',
        id: '198',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03593166640952, 121.43268145833696],
        type: 'point',
        id: '199',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03589708805708, 121.43269578899655],
        type: 'point',
        id: '200',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03586250970464, 121.43271011965615],
        type: 'point',
        id: '201',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03582793135221, 121.43272445031575],
        type: 'point',
        id: '202',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03579335299977, 121.43273878097534],
        type: 'point',
        id: '203',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03575877464733, 121.43275311163494],
        type: 'point',
        id: '204',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03572419629489, 121.43276744229453],
        type: 'point',
        id: '205',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03568961794246, 121.43278177295413],
        type: 'point',
        id: '206',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03565503959002, 121.43279610361373],
        type: 'point',
        id: '207',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03562046123758, 121.43281043427332],
        type: 'point',
        id: '208',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03558588288514, 121.43282476493292],
        type: 'point',
        id: '209',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03555130453271, 121.43283909559251],
        type: 'point',
        id: '210',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03551672618027, 121.43285342625211],
        type: 'point',
        id: '211',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03548214782783, 121.43286775691170],
        type: 'point',
        id: '212',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03544756947539, 121.43288208757130],
        type: 'point',
        id: '213',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03541299112296, 121.43289641823090],
        type: 'point',
        id: '214',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03537841277052, 121.43291074889049],
        type: 'point',
        id: '215',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03534383441808, 121.43292507955009],
        type: 'point',
        id: '216',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530925606565, 121.43293941020968],
        type: 'point',
        id: '217',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03527467771321, 121.43295374086928],
        type: 'point',
        id: '218',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03524009936077, 121.43296807152888],
        type: 'point',
        id: '219',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03520552100833, 121.43298240218847],
        type: 'point',
        id: '220',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03517094265590, 121.43299673284807],
        type: 'point',
        id: '221',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03513636430346, 121.43301106350766],
        type: 'point',
        id: '222',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03510178595102, 121.43302539416726],
        type: 'point',
        id: '223',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03506720759858, 121.43303972482686],
        type: 'point',
        id: '224',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03503262924615, 121.43305405548645],
        type: 'point',
        id: '225',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03499805089371, 121.43306838614605],
        type: 'point',
        id: '226',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03496347254127, 121.43308271680564],
        type: 'point',
        id: '227',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03492889418883, 121.43309704746524],
        type: 'point',
        id: '228',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03489431583640, 121.43311137812483],
        type: 'point',
        id: '229',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03485973748396, 121.43312570878443],
        type: 'point',
        id: '230',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03482515913152, 121.43314003944403],
        type: 'point',
        id: '231',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03542056096929, 121.43304079771040],
        type: 'point',
        id: '232',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03545458375924, 121.43302512796301],
        type: 'point',
        id: '233',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03548860654919, 121.43300945821559],
        type: 'point',
        id: '234',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03552262933913, 121.43299378846820],
        type: 'point',
        id: '235',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03555665212908, 121.43297811872080],
        type: 'point',
        id: '236',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559067491903, 121.43296244897340],
        type: 'point',
        id: '237',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03562469770898, 121.43294677922599],
        type: 'point',
        id: '238',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03565872049893, 121.43293110947859],
        type: 'point',
        id: '239',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03569274328888, 121.43291543973119],
        type: 'point',
        id: '240',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03572676607882, 121.43289976998379],
        type: 'point',
        id: '241',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03576078886878, 121.43288410023638],
        type: 'point',
        id: '242',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03579481165872, 121.43286843048898],
        type: 'point',
        id: '243',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03582883444867, 121.43285276074158],
        type: 'point',
        id: '244',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03586285723862, 121.43283709099418],
        type: 'point',
        id: '245',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03589688002857, 121.43282142124677],
        type: 'point',
        id: '246',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03593090281852, 121.43280575149937],
        type: 'point',
        id: '247',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03596492560846, 121.43279008175197],
        type: 'point',
        id: '248',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03599894839841, 121.43277441200458],
        type: 'point',
        id: '249',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03603297118836, 121.43275874225716],
        type: 'point',
        id: '250',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03606699397831, 121.43274307250977],
        type: 'point',
        id: '251',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03538362175945, 121.43305510282515],
        type: 'point',
        id: '252',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03534668254962, 121.43306940793990],
        type: 'point',
        id: '253',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530974333978, 121.43308371305464],
        type: 'point',
        id: '254',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03527280412995, 121.43309801816939],
        type: 'point',
        id: '255',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03523586492011, 121.43311232328413],
        type: 'point',
        id: '256',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03519892571028, 121.43312662839888],
        type: 'point',
        id: '257',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03516198650044, 121.43314093351363],
        type: 'point',
        id: '258',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03512504729061, 121.43315523862839],
        type: 'point',
        id: '259',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03508810808078, 121.43316954374313],
        type: 'point',
        id: '260',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03505116887094, 121.43318384885788],
        type: 'point',
        id: '261',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03501422966111, 121.43319815397263],
        type: 'point',
        id: '262',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03497729045127, 121.43321245908737],
        type: 'point',
        id: '263',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03494035124144, 121.43322676420212],
        type: 'point',
        id: '264',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03490341203160, 121.43324106931686],
        type: 'point',
        id: '265',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03486647282177, 121.43325537443161],
        type: 'point',
        id: '266',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03542056096929, 121.43304079771040],
        type: 'point',
        id: '267',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03543465615822, 121.43308156728743],
        type: 'point',
        id: '268',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03544875134714, 121.43312233686446],
        type: 'point',
        id: '269',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03546284653607, 121.43316310644148],
        type: 'point',
        id: '270',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03547694172500, 121.43320387601851],
        type: 'point',
        id: '271',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03549103691393, 121.43324464559554],
        type: 'point',
        id: '272',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03549103691393, 121.43324464559554],
        type: 'point',
        id: '273',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03550631241717, 121.43327916945728],
        type: 'point',
        id: '274',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03552158792041, 121.43331369331902],
        type: 'point',
        id: '275',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03553686342365, 121.43334821718076],
        type: 'point',
        id: '276',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03555213892689, 121.43338274104251],
        type: 'point',
        id: '277',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03556741443013, 121.43341726490425],
        type: 'point',
        id: '278',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03558268993337, 121.43345178876599],
        type: 'point',
        id: '279',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559796543662, 121.43348631262774],
        type: 'point',
        id: '280',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03561324093986, 121.43352083648948],
        type: 'point',
        id: '281',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03562851644310, 121.43355536035122],
        type: 'point',
        id: '282',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03564379194634, 121.43358988421296],
        type: 'point',
        id: '283',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03565906744958, 121.43362440807471],
        type: 'point',
        id: '284',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03567434295282, 121.43365893193645],
        type: 'point',
        id: '285',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03568961845606, 121.43369345579819],
        type: 'point',
        id: '286',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03570489395930, 121.43372797965993],
        type: 'point',
        id: '287',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03572016946254, 121.43376250352168],
        type: 'point',
        id: '288',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03573544496578, 121.43379702738342],
        type: 'point',
        id: '289',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03575072046903, 121.43383155124516],
        type: 'point',
        id: '290',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03576599597227, 121.43386607510691],
        type: 'point',
        id: '291',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03578127147551, 121.43390059896865],
        type: 'point',
        id: '292',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03579654697875, 121.43393512283039],
        type: 'point',
        id: '293',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03581182248199, 121.43396964669213],
        type: 'point',
        id: '294',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03582709798523, 121.43400417055388],
        type: 'point',
        id: '295',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03584237348847, 121.43403869441562],
        type: 'point',
        id: '296',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03585764899171, 121.43407321827736],
        type: 'point',
        id: '297',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03587292449495, 121.43410774213910],
        type: 'point',
        id: '298',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03588819999819, 121.43414226600085],
        type: 'point',
        id: '299',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03590347550144, 121.43417678986259],
        type: 'point',
        id: '300',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03591875100468, 121.43421131372433],
        type: 'point',
        id: '301',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03593402650792, 121.43424583758608],
        type: 'point',
        id: '302',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03594930201116, 121.43428036144782],
        type: 'point',
        id: '303',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03596457751440, 121.43431488530956],
        type: 'point',
        id: '304',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03597985301764, 121.43434940917130],
        type: 'point',
        id: '305',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03599512852088, 121.43438393303305],
        type: 'point',
        id: '306',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03601040402412, 121.43441845689479],
        type: 'point',
        id: '307',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03602567952736, 121.43445298075653],
        type: 'point',
        id: '308',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03604095503060, 121.43448750461828],
        type: 'point',
        id: '309',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03605623053385, 121.43452202848002],
        type: 'point',
        id: '310',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03607150603709, 121.43455655234176],
        type: 'point',
        id: '311',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03608678154033, 121.43459107620350],
        type: 'point',
        id: '312',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03610205704357, 121.43462560006525],
        type: 'point',
        id: '313',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03611733254681, 121.43466012392699],
        type: 'point',
        id: '314',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03613260805005, 121.43469464778873],
        type: 'point',
        id: '315',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03614788355329, 121.43472917165047],
        type: 'point',
        id: '316',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03616315905653, 121.43476369551222],
        type: 'point',
        id: '317',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617843455977, 121.43479821937396],
        type: 'point',
        id: '318',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03619371006301, 121.43483274323570],
        type: 'point',
        id: '319',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03620898556626, 121.43486726709745],
        type: 'point',
        id: '320',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622426106950, 121.43490179095919],
        type: 'point',
        id: '321',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03623953657274, 121.43493631482093],
        type: 'point',
        id: '322',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03625481207598, 121.43497083868267],
        type: 'point',
        id: '323',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03627008757922, 121.43500536254442],
        type: 'point',
        id: '324',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03628536308246, 121.43503988640616],
        type: 'point',
        id: '325',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03630063858570, 121.43507441026790],
        type: 'point',
        id: '326',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03631591408894, 121.43510893412964],
        type: 'point',
        id: '327',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03633118959218, 121.43514345799139],
        type: 'point',
        id: '328',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03634646509542, 121.43517798185313],
        type: 'point',
        id: '329',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03636174059866, 121.43521250571487],
        type: 'point',
        id: '330',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03637701610191, 121.43524702957662],
        type: 'point',
        id: '331',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03639229160515, 121.43528155343836],
        type: 'point',
        id: '332',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03640756710839, 121.43531607730010],
        type: 'point',
        id: '333',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03642284261163, 121.43535060116184],
        type: 'point',
        id: '334',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03643811811487, 121.43538512502359],
        type: 'point',
        id: '335',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03645339361811, 121.43541964888533],
        type: 'point',
        id: '336',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03646866912135, 121.43545417274707],
        type: 'point',
        id: '337',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03648394462459, 121.43548869660881],
        type: 'point',
        id: '338',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03649922012783, 121.43552322047056],
        type: 'point',
        id: '339',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03651449563107, 121.43555774433230],
        type: 'point',
        id: '340',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03652977113432, 121.43559226819404],
        type: 'point',
        id: '341',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03654504663756, 121.43562679205579],
        type: 'point',
        id: '342',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03762473772273, 121.43205374479294],
        type: 'point',
        id: '343',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03764984938920, 121.43202066421509],
        type: 'point',
        id: '344',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03767496105567, 121.43198758363722],
        type: 'point',
        id: '345',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03770007272215, 121.43195450305937],
        type: 'point',
        id: '346',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03758903933003, 121.43206761828785],
        type: 'point',
        id: '347',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03755334093733, 121.43208149178275],
        type: 'point',
        id: '348',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03751764254464, 121.43209536527765],
        type: 'point',
        id: '349',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03748194415194, 121.43210923877255],
        type: 'point',
        id: '350',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03744624575925, 121.43212311226746],
        type: 'point',
        id: '351',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03741054736655, 121.43213698576237],
        type: 'point',
        id: '352',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03737484897385, 121.43215085925728],
        type: 'point',
        id: '353',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03733915058115, 121.43216473275217],
        type: 'point',
        id: '354',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03730345218846, 121.43217860624708],
        type: 'point',
        id: '355',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03726775379576, 121.43219247974199],
        type: 'point',
        id: '356',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03723205540307, 121.43220635323689],
        type: 'point',
        id: '357',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03719635701037, 121.43222022673180],
        type: 'point',
        id: '358',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716065861767, 121.43223410022669],
        type: 'point',
        id: '359',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03712496022498, 121.43224797372160],
        type: 'point',
        id: '360',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708926183228, 121.43226184721651],
        type: 'point',
        id: '361',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03705356343959, 121.43227572071142],
        type: 'point',
        id: '362',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03701786504689, 121.43228959420631],
        type: 'point',
        id: '363',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03698216665419, 121.43230346770122],
        type: 'point',
        id: '364',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03694646826149, 121.43231734119612],
        type: 'point',
        id: '365',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03691076986880, 121.43233121469103],
        type: 'point',
        id: '366',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03687507147610, 121.43234508818594],
        type: 'point',
        id: '367',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03683937308341, 121.43235896168083],
        type: 'point',
        id: '368',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03680367469071, 121.43237283517574],
        type: 'point',
        id: '369',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03676797629801, 121.43238670867065],
        type: 'point',
        id: '370',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03673227790532, 121.43240058216556],
        type: 'point',
        id: '371',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03669657951262, 121.43241445566046],
        type: 'point',
        id: '372',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03666088111993, 121.43242832915536],
        type: 'point',
        id: '373',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03662518272723, 121.43244220265026],
        type: 'point',
        id: '374',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03658948433453, 121.43245607614517],
        type: 'point',
        id: '375',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03777783783429, 121.43170237541197],
        type: 'point',
        id: '376',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03776672853256, 121.43173839364732],
        type: 'point',
        id: '377',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03775561923082, 121.43177441188266],
        type: 'point',
        id: '378',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03774450992909, 121.43181043011801],
        type: 'point',
        id: '379',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03773340062735, 121.43184644835334],
        type: 'point',
        id: '380',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03772229132562, 121.43188246658869],
        type: 'point',
        id: '381',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03771118202388, 121.43191848482402],
        type: 'point',
        id: '382',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03770007272215, 121.43195450305937],
        type: 'point',
        id: '383',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03780456957730, 121.43165543675423],
        type: 'point',
        id: '384',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03783130132030, 121.43160849809647],
        type: 'point',
        id: '385',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03790177587989, 121.43043637275696],
        type: 'point',
        id: '386',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03789950250700, 121.43047418325177],
        type: 'point',
        id: '387',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03789722913411, 121.43051199374661],
        type: 'point',
        id: '388',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03789495576122, 121.43054980424142],
        type: 'point',
        id: '389',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03789268238833, 121.43058761473625],
        type: 'point',
        id: '390',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03789040901544, 121.43062542523107],
        type: 'point',
        id: '391',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03788813564255, 121.43066323572590],
        type: 'point',
        id: '392',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03788586226966, 121.43070104622072],
        type: 'point',
        id: '393',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03788358889677, 121.43073885671554],
        type: 'point',
        id: '394',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03788131552388, 121.43077666721037],
        type: 'point',
        id: '395',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03787904215099, 121.43081447770518],
        type: 'point',
        id: '396',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03787676877810, 121.43085228820001],
        type: 'point',
        id: '397',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03787449540521, 121.43089009869483],
        type: 'point',
        id: '398',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03787222203232, 121.43092790918965],
        type: 'point',
        id: '399',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03786994865943, 121.43096571968448],
        type: 'point',
        id: '400',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03786767528654, 121.43100353017930],
        type: 'point',
        id: '401',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03786540191365, 121.43104134067413],
        type: 'point',
        id: '402',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03786312854076, 121.43107915116894],
        type: 'point',
        id: '403',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03786085516787, 121.43111696166378],
        type: 'point',
        id: '404',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03785858179498, 121.43115477215859],
        type: 'point',
        id: '405',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03785630842209, 121.43119258265341],
        type: 'point',
        id: '406',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03785403504920, 121.43123039314824],
        type: 'point',
        id: '407',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03785176167631, 121.43126820364306],
        type: 'point',
        id: '408',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03784948830342, 121.43130601413789],
        type: 'point',
        id: '409',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03784721493053, 121.43134382463271],
        type: 'point',
        id: '410',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03784494155764, 121.43138163512752],
        type: 'point',
        id: '411',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03784266818475, 121.43141944562235],
        type: 'point',
        id: '412',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03784039481186, 121.43145725611717],
        type: 'point',
        id: '413',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03783812143897, 121.43149506661200],
        type: 'point',
        id: '414',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03783584806608, 121.43153287710682],
        type: 'point',
        id: '415',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03783357469319, 121.43157068760165],
        type: 'point',
        id: '416',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03783130132030, 121.43160849809647],
        type: 'point',
        id: '417',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03794065833505, 121.43043905496597],
        type: 'point',
        id: '418',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03797954079021, 121.43044173717499],
        type: 'point',
        id: '419',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03801842324538, 121.43044441938400],
        type: 'point',
        id: '420',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03805730570053, 121.43044710159302],
        type: 'point',
        id: '421',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03809618815570, 121.43044978380202],
        type: 'point',
        id: '422',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03813507061086, 121.43045246601103],
        type: 'point',
        id: '423',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03817395306602, 121.43045514822005],
        type: 'point',
        id: '424',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03821283552118, 121.43045783042906],
        type: 'point',
        id: '425',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03752024071146, 121.43086552619933],
        type: 'point',
        id: '426',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03752267087505, 121.43082733665193],
        type: 'point',
        id: '427',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03752510103863, 121.43078914710452],
        type: 'point',
        id: '428',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03752753120221, 121.43075095755712],
        type: 'point',
        id: '429',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03752996136579, 121.43071276800973],
        type: 'point',
        id: '430',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03753239152938, 121.43067457846232],
        type: 'point',
        id: '431',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03753482169296, 121.43063638891492],
        type: 'point',
        id: '432',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03753725185654, 121.43059819936752],
        type: 'point',
        id: '433',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03753968202012, 121.43056000982011],
        type: 'point',
        id: '434',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03754211218370, 121.43052182027272],
        type: 'point',
        id: '435',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03754454234729, 121.43048363072532],
        type: 'point',
        id: '436',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03754697251087, 121.43044544117791],
        type: 'point',
        id: '437',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03754940267445, 121.43040725163051],
        type: 'point',
        id: '438',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03755183283804, 121.43036906208312],
        type: 'point',
        id: '439',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03755426300162, 121.43033087253571],
        type: 'point',
        id: '440',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03755669316520, 121.43029268298831],
        type: 'point',
        id: '441',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03755912332878, 121.43025449344091],
        type: 'point',
        id: '442',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03756155349237, 121.43021630389350],
        type: 'point',
        id: '443',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03756398365595, 121.43017811434611],
        type: 'point',
        id: '444',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03756641381953, 121.43013992479871],
        type: 'point',
        id: '445',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03756884398311, 121.43010173525130],
        type: 'point',
        id: '446',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03757127414670, 121.43006354570390],
        type: 'point',
        id: '447',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03755912328141, 121.43086761236189],
        type: 'point',
        id: '448',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03759800585135, 121.43086969852446],
        type: 'point',
        id: '449',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03763688842129, 121.43087178468703],
        type: 'point',
        id: '450',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03767577099123, 121.43087387084960],
        type: 'point',
        id: '451',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03771465356117, 121.43087595701218],
        type: 'point',
        id: '452',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03775353613111, 121.43087804317474],
        type: 'point',
        id: '453',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03779241870106, 121.43088012933731],
        type: 'point',
        id: '454',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03783130127100, 121.43088221549988],
        type: 'point',
        id: '455',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03714842504247, 121.43120616674423],
        type: 'point',
        id: '456',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03714988314522, 121.43116700649261],
        type: 'point',
        id: '457',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03715134124796, 121.43112784624100],
        type: 'point',
        id: '458',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03715279935070, 121.43108868598938],
        type: 'point',
        id: '459',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03715425745345, 121.43104952573776],
        type: 'point',
        id: '460',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03715571555619, 121.43101036548615],
        type: 'point',
        id: '461',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03715717365893, 121.43097120523453],
        type: 'point',
        id: '462',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03715863176168, 121.43093204498291],
        type: 'point',
        id: '463',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716008986442, 121.43089288473128],
        type: 'point',
        id: '464',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716154796716, 121.43085372447966],
        type: 'point',
        id: '465',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716300606991, 121.43081456422804],
        type: 'point',
        id: '466',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716446417265, 121.43077540397643],
        type: 'point',
        id: '467',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716592227539, 121.43073624372481],
        type: 'point',
        id: '468',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716738037814, 121.43069708347319],
        type: 'point',
        id: '469',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716883848088, 121.43065792322157],
        type: 'point',
        id: '470',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03717029658362, 121.43061876296996],
        type: 'point',
        id: '471',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03714668920538, 121.43124362187726],
        type: 'point',
        id: '472',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03714495336828, 121.43128107701030],
        type: 'point',
        id: '473',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03714321753119, 121.43131853214332],
        type: 'point',
        id: '474',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03714148169409, 121.43135598727635],
        type: 'point',
        id: '475',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713974585699, 121.43139344240937],
        type: 'point',
        id: '476',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713801001989, 121.43143089754241],
        type: 'point',
        id: '477',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713627418280, 121.43146835267544],
        type: 'point',
        id: '478',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713453834570, 121.43150580780846],
        type: 'point',
        id: '479',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713280250860, 121.43154326294150],
        type: 'point',
        id: '480',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713106667151, 121.43158071807453],
        type: 'point',
        id: '481',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03712933083441, 121.43161817320755],
        type: 'point',
        id: '482',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03712759499731, 121.43165562834058],
        type: 'point',
        id: '483',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03712585916021, 121.43169308347362],
        type: 'point',
        id: '484',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03712412332312, 121.43173053860664],
        type: 'point',
        id: '485',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03712238748602, 121.43176799373967],
        type: 'point',
        id: '486',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03712065164892, 121.43180544887271],
        type: 'point',
        id: '487',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03711891581183, 121.43184290400573],
        type: 'point',
        id: '488',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03711717997473, 121.43188035913876],
        type: 'point',
        id: '489',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03711544413763, 121.43191781427178],
        type: 'point',
        id: '490',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03711370830053, 121.43195526940482],
        type: 'point',
        id: '491',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03711197246344, 121.43199272453785],
        type: 'point',
        id: '492',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03711023662634, 121.43203017967087],
        type: 'point',
        id: '493',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710850078925, 121.43206763480391],
        type: 'point',
        id: '494',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710676495215, 121.43210508993694],
        type: 'point',
        id: '495',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710502911505, 121.43214254506996],
        type: 'point',
        id: '496',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710329327796, 121.43218000020299],
        type: 'point',
        id: '497',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710155744086, 121.43221745533603],
        type: 'point',
        id: '498',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713265833228, 121.43060325849348],
        type: 'point',
        id: '499',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709502008094, 121.43060116506204],
        type: 'point',
        id: '500',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03705738182960, 121.43059907163062],
        type: 'point',
        id: '501',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03701974357826, 121.43059697819919],
        type: 'point',
        id: '502',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03698210532691, 121.43059488476777],
        type: 'point',
        id: '503',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03694446707557, 121.43059279133634],
        type: 'point',
        id: '504',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03690682882423, 121.43059069790492],
        type: 'point',
        id: '505',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03686919057289, 121.43058860447348],
        type: 'point',
        id: '506',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03683155232155, 121.43058651104207],
        type: 'point',
        id: '507',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03679391407021, 121.43058441761063],
        type: 'point',
        id: '508',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03675627581886, 121.43058232417921],
        type: 'point',
        id: '509',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03671863756753, 121.43058023074778],
        type: 'point',
        id: '510',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03668099931618, 121.43057813731636],
        type: 'point',
        id: '511',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03664336106484, 121.43057604388493],
        type: 'point',
        id: '512',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03660572281350, 121.43057395045351],
        type: 'point',
        id: '513',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03656808456216, 121.43057185702207],
        type: 'point',
        id: '514',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03653044631082, 121.43056976359065],
        type: 'point',
        id: '515',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03649280805947, 121.43056767015922],
        type: 'point',
        id: '516',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03645516980813, 121.43056557672780],
        type: 'point',
        id: '517',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03641753155679, 121.43056348329637],
        type: 'point',
        id: '518',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03637989330545, 121.43056138986495],
        type: 'point',
        id: '519',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03634225505411, 121.43055929643351],
        type: 'point',
        id: '520',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03630461680277, 121.43055720300210],
        type: 'point',
        id: '521',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03626697855142, 121.43055510957066],
        type: 'point',
        id: '522',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622934030008, 121.43055301613924],
        type: 'point',
        id: '523',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03619170204874, 121.43055092270781],
        type: 'point',
        id: '524',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03615406379740, 121.43054882927639],
        type: 'point',
        id: '525',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03611642554606, 121.43054673584496],
        type: 'point',
        id: '526',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03607878729472, 121.43054464241354],
        type: 'point',
        id: '527',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03604114904338, 121.43054254898210],
        type: 'point',
        id: '528',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03600351079204, 121.43054045555068],
        type: 'point',
        id: '529',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03596587254069, 121.43053836211925],
        type: 'point',
        id: '530',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03592823428935, 121.43053626868783],
        type: 'point',
        id: '531',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03589059603801, 121.43053417525640],
        type: 'point',
        id: '532',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03585295778667, 121.43053208182498],
        type: 'point',
        id: '533',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03581531953533, 121.43052998839354],
        type: 'point',
        id: '534',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03577768128399, 121.43052789496213],
        type: 'point',
        id: '535',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03574004303264, 121.43052580153069],
        type: 'point',
        id: '536',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03570240478130, 121.43052370809927],
        type: 'point',
        id: '537',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03566476652996, 121.43052161466784],
        type: 'point',
        id: '538',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03720917926449, 121.43060773611069],
        type: 'point',
        id: '539',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03724806194536, 121.43061012029648],
        type: 'point',
        id: '540',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03728694462624, 121.43061250448227],
        type: 'point',
        id: '541',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03732582730711, 121.43061488866806],
        type: 'point',
        id: '542',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03736470998798, 121.43061727285384],
        type: 'point',
        id: '543',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03740359266885, 121.43061965703963],
        type: 'point',
        id: '544',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03744247534972, 121.43062204122542],
        type: 'point',
        id: '545',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03748135803059, 121.43062442541121],
        type: 'point',
        id: '546',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03720674914352, 121.42993748188017],
        type: 'point',
        id: '547',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03724698190352, 121.42994046211241],
        type: 'point',
        id: '548',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03728721466353, 121.42994344234465],
        type: 'point',
        id: '549',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03732744742354, 121.42994642257689],
        type: 'point',
        id: '550',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03736768018355, 121.42994940280913],
        type: 'point',
        id: '551',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03740791294356, 121.42995238304138],
        type: 'point',
        id: '552',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03744814570356, 121.42995536327362],
        type: 'point',
        id: '553',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03748837846357, 121.42995834350586],
        type: 'point',
        id: '554',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03752861122358, 121.42996132373810],
        type: 'point',
        id: '555',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03756884398359, 121.42996430397034],
        type: 'point',
        id: '556',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03720460487529, 121.42997597946840],
        type: 'point',
        id: '557',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03720246060706, 121.43001447705660],
        type: 'point',
        id: '558',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03720031633883, 121.43005297464482],
        type: 'point',
        id: '559',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03719817207060, 121.43009147223303],
        type: 'point',
        id: '560',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03719602780237, 121.43012996982125],
        type: 'point',
        id: '561',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03719388353414, 121.43016846740946],
        type: 'point',
        id: '562',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03719173926591, 121.43020696499768],
        type: 'point',
        id: '563',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03718959499768, 121.43024546258589],
        type: 'point',
        id: '564',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03718745072946, 121.43028396017411],
        type: 'point',
        id: '565',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03718530646123, 121.43032245776232],
        type: 'point',
        id: '566',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03718316219300, 121.43036095535054],
        type: 'point',
        id: '567',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03718101792477, 121.43039945293874],
        type: 'point',
        id: '568',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03717887365654, 121.43043795052697],
        type: 'point',
        id: '569',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03717672938831, 121.43047644811517],
        type: 'point',
        id: '570',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03717458512008, 121.43051494570339],
        type: 'point',
        id: '571',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03717244085185, 121.43055344329160],
        type: 'point',
        id: '572',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03720674914352, 121.42993748188017],
        type: 'point',
        id: '573',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716889441584, 121.42993459334738],
        type: 'point',
        id: '574',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713103968816, 121.42993170481459],
        type: 'point',
        id: '575',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709318496049, 121.42992881628180],
        type: 'point',
        id: '576',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03705533023281, 121.42992592774901],
        type: 'point',
        id: '577',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03701747550513, 121.42992303921622],
        type: 'point',
        id: '578',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03697962077746, 121.42992015068343],
        type: 'point',
        id: '579',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03694176604978, 121.42991726215064],
        type: 'point',
        id: '580',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03690391132211, 121.42991437361785],
        type: 'point',
        id: '581',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03686605659443, 121.42991148508506],
        type: 'point',
        id: '582',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03682820186675, 121.42990859655227],
        type: 'point',
        id: '583',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03679034713908, 121.42990570801948],
        type: 'point',
        id: '584',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03675249241140, 121.42990281948668],
        type: 'point',
        id: '585',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03671463768373, 121.42989993095389],
        type: 'point',
        id: '586',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03667678295605, 121.42989704242110],
        type: 'point',
        id: '587',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03663892822837, 121.42989415388831],
        type: 'point',
        id: '588',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03660107350070, 121.42989126535552],
        type: 'point',
        id: '589',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03656321877302, 121.42988837682273],
        type: 'point',
        id: '590',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03652536404535, 121.42988548828994],
        type: 'point',
        id: '591',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03648750931767, 121.42988259975715],
        type: 'point',
        id: '592',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03644965458999, 121.42987971122436],
        type: 'point',
        id: '593',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03641179986232, 121.42987682269157],
        type: 'point',
        id: '594',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03637394513464, 121.42987393415878],
        type: 'point',
        id: '595',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03633609040697, 121.42987104562599],
        type: 'point',
        id: '596',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03629823567929, 121.42986815709320],
        type: 'point',
        id: '597',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03626038095161, 121.42986526856041],
        type: 'point',
        id: '598',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622738660346, 121.42932325601578],
        type: 'point',
        id: '599',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622510829993, 121.42936147749424],
        type: 'point',
        id: '600',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622282999641, 121.42939969897270],
        type: 'point',
        id: '601',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622055169289, 121.42943792045116],
        type: 'point',
        id: '602',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03621827338937, 121.42947614192963],
        type: 'point',
        id: '603',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03621599508584, 121.42951436340809],
        type: 'point',
        id: '604',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03621371678232, 121.42955258488655],
        type: 'point',
        id: '605',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03621143847880, 121.42959080636501],
        type: 'point',
        id: '606',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03620916017528, 121.42962902784348],
        type: 'point',
        id: '607',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03620688187175, 121.42966724932194],
        type: 'point',
        id: '608',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03620460356823, 121.42970547080040],
        type: 'point',
        id: '609',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03620232526471, 121.42974369227886],
        type: 'point',
        id: '610',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03620004696118, 121.42978191375732],
        type: 'point',
        id: '611',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03619776865766, 121.42982013523579],
        type: 'point',
        id: '612',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03619549035414, 121.42985835671425],
        type: 'point',
        id: '613',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03619321205062, 121.42989657819271],
        type: 'point',
        id: '614',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03619093374709, 121.42993479967117],
        type: 'point',
        id: '615',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03618865544357, 121.42997302114964],
        type: 'point',
        id: '616',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03618637714005, 121.43001124262810],
        type: 'point',
        id: '617',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03618409883653, 121.43004946410656],
        type: 'point',
        id: '618',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03618182053300, 121.43008768558502],
        type: 'point',
        id: '619',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617954222948, 121.43012590706348],
        type: 'point',
        id: '620',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617726392596, 121.43016412854195],
        type: 'point',
        id: '621',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617498562243, 121.43020235002041],
        type: 'point',
        id: '622',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617270731891, 121.43024057149887],
        type: 'point',
        id: '623',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617042901539, 121.43027879297733],
        type: 'point',
        id: '624',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03616815071187, 121.43031701445580],
        type: 'point',
        id: '625',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03616587240834, 121.43035523593426],
        type: 'point',
        id: '626',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03616359410482, 121.43039345741272],
        type: 'point',
        id: '627',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03616131580130, 121.43043167889118],
        type: 'point',
        id: '628',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03615903749778, 121.43046990036964],
        type: 'point',
        id: '629',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03615675919425, 121.43050812184811],
        type: 'point',
        id: '630',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03572676650347, 121.42933934926988],
        type: 'point',
        id: '631',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03570413523611, 121.42937002703549],
        type: 'point',
        id: '632',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03568150396876, 121.42940070480110],
        type: 'point',
        id: '633',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03565887270140, 121.42943138256670],
        type: 'point',
        id: '634',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03563624143405, 121.42946206033231],
        type: 'point',
        id: '635',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03561361016670, 121.42949273809792],
        type: 'point',
        id: '636',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559097889934, 121.42952341586353],
        type: 'point',
        id: '637',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03556834763199, 121.42955409362914],
        type: 'point',
        id: '638',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03554571636464, 121.42958477139473],
        type: 'point',
        id: '639',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03552308509729, 121.42961544916034],
        type: 'point',
        id: '640',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03550045382993, 121.42964612692595],
        type: 'point',
        id: '641',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03547782256258, 121.42967680469155],
        type: 'point',
        id: '642',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03545519129522, 121.42970748245716],
        type: 'point',
        id: '643',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03543256002787, 121.42973816022277],
        type: 'point',
        id: '644',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03540992876052, 121.42976883798838],
        type: 'point',
        id: '645',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03538729749316, 121.42979951575398],
        type: 'point',
        id: '646',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03576508880425, 121.42934161883136],
        type: 'point',
        id: '647',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03580341110505, 121.42934388839282],
        type: 'point',
        id: '648',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03584173340584, 121.42934615795430],
        type: 'point',
        id: '649',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03588005570662, 121.42934842751576],
        type: 'point',
        id: '650',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03591837800742, 121.42935069707724],
        type: 'point',
        id: '651',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03595670030821, 121.42935296663872],
        type: 'point',
        id: '652',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03599502260899, 121.42935523620018],
        type: 'point',
        id: '653',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03603334490978, 121.42935750576166],
        type: 'point',
        id: '654',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03607166721058, 121.42935977532314],
        type: 'point',
        id: '655',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03610998951136, 121.42936204488460],
        type: 'point',
        id: '656',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03614831181215, 121.42936431444608],
        type: 'point',
        id: '657',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03618663411294, 121.42936658400754],
        type: 'point',
        id: '658',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03583855563502, 121.43112033605576],
        type: 'point',
        id: '659',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03582536310503, 121.43108546733856],
        type: 'point',
        id: '660',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03581217057504, 121.43105059862137],
        type: 'point',
        id: '661',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03579897804505, 121.43101572990417],
        type: 'point',
        id: '662',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03578578551506, 121.43098086118698],
        type: 'point',
        id: '663',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03577259298507, 121.43094599246979],
        type: 'point',
        id: '664',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03575940045508, 121.43091112375259],
        type: 'point',
        id: '665',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03574620792509, 121.43087625503540],
        type: 'point',
        id: '666',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03573301539510, 121.43084138631821],
        type: 'point',
        id: '667',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03571982286511, 121.43080651760101],
        type: 'point',
        id: '668',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03570663033512, 121.43077164888382],
        type: 'point',
        id: '669',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03569343780513, 121.43073678016663],
        type: 'point',
        id: '670',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03568024527514, 121.43070191144943],
        type: 'point',
        id: '671',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03566705274515, 121.43066704273224],
        type: 'point',
        id: '672',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03565386021516, 121.43063217401505],
        type: 'point',
        id: '673',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03564066768517, 121.43059730529785],
        type: 'point',
        id: '674',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03562747515518, 121.43056243658066],
        type: 'point',
        id: '675',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03561428262519, 121.43052756786346],
        type: 'point',
        id: '676',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560109009520, 121.43049269914627],
        type: 'point',
        id: '677',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03558789756521, 121.43045783042908],
        type: 'point',
        id: '678',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03557470503522, 121.43042296171188],
        type: 'point',
        id: '679',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03556151250523, 121.43038809299469],
        type: 'point',
        id: '680',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03554831997524, 121.43035322427748],
        type: 'point',
        id: '681',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03553512744525, 121.43031835556029],
        type: 'point',
        id: '682',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03552193491526, 121.43028348684309],
        type: 'point',
        id: '683',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03550874238527, 121.43024861812590],
        type: 'point',
        id: '684',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03549554985528, 121.43021374940871],
        type: 'point',
        id: '685',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03548235732529, 121.43017888069151],
        type: 'point',
        id: '686',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03546916479530, 121.43014401197432],
        type: 'point',
        id: '687',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03545597226531, 121.43010914325713],
        type: 'point',
        id: '688',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03544277973532, 121.43007427453993],
        type: 'point',
        id: '689',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03542958720533, 121.43003940582274],
        type: 'point',
        id: '690',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03541639467534, 121.43000453710555],
        type: 'point',
        id: '691',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03540320214535, 121.42996966838835],
        type: 'point',
        id: '692',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03539000961536, 121.42993479967116],
        type: 'point',
        id: '693',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03537681708537, 121.42989993095397],
        type: 'point',
        id: '694',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536362455538, 121.42986506223677],
        type: 'point',
        id: '695',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03535043202539, 121.42983019351958],
        type: 'point',
        id: '696',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03533723949541, 121.42979532480238],
        type: 'point',
        id: '697',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03532404696541, 121.42976045608519],
        type: 'point',
        id: '698',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03531085443542, 121.42972558736800],
        type: 'point',
        id: '699',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529766190544, 121.42969071865080],
        type: 'point',
        id: '700',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03528446937544, 121.42965584993361],
        type: 'point',
        id: '701',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03585019110741, 121.43115626140074],
        type: 'point',
        id: '702',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03586182657980, 121.43119218674573],
        type: 'point',
        id: '703',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03587346205219, 121.43122811209072],
        type: 'point',
        id: '704',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03588509752458, 121.43126403743571],
        type: 'point',
        id: '705',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03589673299698, 121.43129996278068],
        type: 'point',
        id: '706',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03590836846937, 121.43133588812567],
        type: 'point',
        id: '707',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03592000394176, 121.43137181347066],
        type: 'point',
        id: '708',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03593163941416, 121.43140773881565],
        type: 'point',
        id: '709',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03594327488655, 121.43144366416064],
        type: 'point',
        id: '710',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03595491035894, 121.43147958950563],
        type: 'point',
        id: '711',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03596654583133, 121.43151551485062],
        type: 'point',
        id: '712',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03597818130372, 121.43155144019561],
        type: 'point',
        id: '713',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03598981677612, 121.43158736554058],
        type: 'point',
        id: '714',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03600145224851, 121.43162329088557],
        type: 'point',
        id: '715',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03601308772090, 121.43165921623056],
        type: 'point',
        id: '716',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03602472319329, 121.43169514157555],
        type: 'point',
        id: '717',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03603635866568, 121.43173106692053],
        type: 'point',
        id: '718',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03604799413808, 121.43176699226552],
        type: 'point',
        id: '719',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03605962961047, 121.43180291761051],
        type: 'point',
        id: '720',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03607126508286, 121.43183884295550],
        type: 'point',
        id: '721',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03608290055525, 121.43187476830047],
        type: 'point',
        id: '722',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03609453602764, 121.43191069364546],
        type: 'point',
        id: '723',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03610617150004, 121.43194661899045],
        type: 'point',
        id: '724',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03611780697243, 121.43198254433544],
        type: 'point',
        id: '725',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03612944244482, 121.43201846968043],
        type: 'point',
        id: '726',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03614107791722, 121.43205439502542],
        type: 'point',
        id: '727',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03615271338961, 121.43209032037041],
        type: 'point',
        id: '728',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03616434886200, 121.43212624571539],
        type: 'point',
        id: '729',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617598433439, 121.43216217106037],
        type: 'point',
        id: '730',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03618761980678, 121.43219809640536],
        type: 'point',
        id: '731',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03619925527918, 121.43223402175035],
        type: 'point',
        id: '732',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03621089075157, 121.43226994709534],
        type: 'point',
        id: '733',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622252622396, 121.43230587244032],
        type: 'point',
        id: '734',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472308995493, 121.43068313598633],
        type: 'point',
        id: '735',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03474345346934, 121.43065067200826],
        type: 'point',
        id: '736',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03476381698373, 121.43061820803018],
        type: 'point',
        id: '737',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03478418049814, 121.43058574405210],
        type: 'point',
        id: '738',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03480454401253, 121.43055328007402],
        type: 'point',
        id: '739',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03482490752694, 121.43052081609595],
        type: 'point',
        id: '740',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03484527104133, 121.43048835211788],
        type: 'point',
        id: '741',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03486563455574, 121.43045588813979],
        type: 'point',
        id: '742',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03488599807013, 121.43042342416172],
        type: 'point',
        id: '743',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03490636158454, 121.43039096018364],
        type: 'point',
        id: '744',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03492672509894, 121.43035849620557],
        type: 'point',
        id: '745',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03494708861334, 121.43032603222748],
        type: 'point',
        id: '746',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03496745212774, 121.43029356824941],
        type: 'point',
        id: '747',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03498781564214, 121.43026110427134],
        type: 'point',
        id: '748',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03500817915654, 121.43022864029327],
        type: 'point',
        id: '749',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03502854267094, 121.43019617631518],
        type: 'point',
        id: '750',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03504890618534, 121.43016371233711],
        type: 'point',
        id: '751',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03506926969974, 121.43013124835903],
        type: 'point',
        id: '752',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03508963321414, 121.43009878438096],
        type: 'point',
        id: '753',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03510999672854, 121.43006632040287],
        type: 'point',
        id: '754',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03513036024294, 121.43003385642480],
        type: 'point',
        id: '755',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03515072375734, 121.43000139244673],
        type: 'point',
        id: '756',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03517108727174, 121.42996892846865],
        type: 'point',
        id: '757',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03519145078614, 121.42993646449057],
        type: 'point',
        id: '758',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03521181430054, 121.42990400051249],
        type: 'point',
        id: '759',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03523217781494, 121.42987153653442],
        type: 'point',
        id: '760',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03525254132934, 121.42983907255635],
        type: 'point',
        id: '761',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03527290484374, 121.42980660857826],
        type: 'point',
        id: '762',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529326835814, 121.42977414460019],
        type: 'point',
        id: '763',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03528689958379, 121.43025666475295],
        type: 'point',
        id: '764',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03525712951727, 121.43023386597632],
        type: 'point',
        id: '765',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03522735945074, 121.43021106719971],
        type: 'point',
        id: '766',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03519758938422, 121.43018826842308],
        type: 'point',
        id: '767',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03516781931770, 121.43016546964645],
        type: 'point',
        id: '768',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03532618791409, 121.43026158213614],
        type: 'point',
        id: '769',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536547624440, 121.43026649951933],
        type: 'point',
        id: '770',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03540476457470, 121.43027141690254],
        type: 'point',
        id: '771',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03544405290500, 121.43027633428574],
        type: 'point',
        id: '772',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03548334123531, 121.43028125166893],
        type: 'point',
        id: '773',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529662041675, 121.43052488565445],
        type: 'point',
        id: '774',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529710645837, 121.43056261539459],
        type: 'point',
        id: '775',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529759249998, 121.43060034513474],
        type: 'point',
        id: '776',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529807854159, 121.43063807487488],
        type: 'point',
        id: '777',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529856458320, 121.43067580461502],
        type: 'point',
        id: '778',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529905062482, 121.43071353435516],
        type: 'point',
        id: '779',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03529953666643, 121.43075126409531],
        type: 'point',
        id: '780',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530002270805, 121.43078899383545],
        type: 'point',
        id: '781',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530050874966, 121.43082672357559],
        type: 'point',
        id: '782',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530099479128, 121.43086445331573],
        type: 'point',
        id: '783',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530148083289, 121.43090218305588],
        type: 'point',
        id: '784',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530196687450, 121.43093991279602],
        type: 'point',
        id: '785',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530245291611, 121.43097764253616],
        type: 'point',
        id: '786',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530293895773, 121.43101537227631],
        type: 'point',
        id: '787',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530342499934, 121.43105310201645],
        type: 'point',
        id: '788',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03530391104096, 121.43109083175659],
        type: 'point',
        id: '789',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03526537484322, 121.43109159810203],
        type: 'point',
        id: '790',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03522683864549, 121.43109236444745],
        type: 'point',
        id: '791',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03518830244775, 121.43109313079289],
        type: 'point',
        id: '792',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03514976625002, 121.43109389713833],
        type: 'point',
        id: '793',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03511123005228, 121.43109466348376],
        type: 'point',
        id: '794',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03507269385455, 121.43109542982918],
        type: 'point',
        id: '795',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03503415765682, 121.43109619617462],
        type: 'point',
        id: '796',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03533580747294, 121.43052387982607],
        type: 'point',
        id: '797',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03537499452914, 121.43052287399769],
        type: 'point',
        id: '798',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03541418158533, 121.43052186816931],
        type: 'point',
        id: '799',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03545336864152, 121.43052086234093],
        type: 'point',
        id: '800',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03549255569772, 121.43051985651255],
        type: 'point',
        id: '801',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03553174275391, 121.43051885068417],
        type: 'point',
        id: '802',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03557092981010, 121.43051784485579],
        type: 'point',
        id: '803',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03556880342654, 121.43097549676894],
        type: 'point',
        id: '804',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03551776915820, 121.43097549676894],
        type: 'point',
        id: '805',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560136812175, 121.43094867467879],
        type: 'point',
        id: '806',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03563393281696, 121.43092185258864],
        type: 'point',
        id: '807',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03566649751218, 121.43089503049850],
        type: 'point',
        id: '808',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03569906220739, 121.43086820840836],
        type: 'point',
        id: '809',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03581182346064, 121.43206447362898],
        type: 'point',
        id: '810',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03577780068013, 121.43202826380728],
        type: 'point',
        id: '811',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03574377789961, 121.43199205398558],
        type: 'point',
        id: '812',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03584858016034, 121.43204871565102],
        type: 'point',
        id: '813',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03588533686003, 121.43203295767306],
        type: 'point',
        id: '814',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03592209355973, 121.43201719969510],
        type: 'point',
        id: '815',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03595885025943, 121.43200144171715],
        type: 'point',
        id: '816',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03599560695913, 121.43198568373919],
        type: 'point',
        id: '817',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03603236365883, 121.43196992576122],
        type: 'point',
        id: '818',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03606912035852, 121.43195416778326],
        type: 'point',
        id: '819',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03502443680307, 121.43147438764574],
        type: 'point',
        id: '820',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03506220623217, 121.43147282302381],
        type: 'point',
        id: '821',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03509997566128, 121.43147125840188],
        type: 'point',
        id: '822',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03513774509039, 121.43146969377996],
        type: 'point',
        id: '823',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03517551451949, 121.43146812915803],
        type: 'point',
        id: '824',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03521328394860, 121.43146656453611],
        type: 'point',
        id: '825',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03525105337770, 121.43146499991418],
        type: 'point',
        id: '826',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03528882280681, 121.43146343529226],
        type: 'point',
        id: '827',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03532659223592, 121.43146187067033],
        type: 'point',
        id: '828',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536436166502, 121.43146030604841],
        type: 'point',
        id: '829',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03540213109413, 121.43145874142648],
        type: 'point',
        id: '830',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03543990052323, 121.43145717680456],
        type: 'point',
        id: '831',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03547766995234, 121.43145561218263],
        type: 'point',
        id: '832',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03551543938145, 121.43145404756071],
        type: 'point',
        id: '833',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03555320881055, 121.43145248293878],
        type: 'point',
        id: '834',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559097823966, 121.43145091831686],
        type: 'point',
        id: '835',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03562874766876, 121.43144935369493],
        type: 'point',
        id: '836',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03566651709787, 121.43144778907300],
        type: 'point',
        id: '837',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03570428652698, 121.43144622445108],
        type: 'point',
        id: '838',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03574205595608, 121.43144465982915],
        type: 'point',
        id: '839',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03577982538519, 121.43144309520723],
        type: 'point',
        id: '840',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03581759481429, 121.43144153058530],
        type: 'point',
        id: '841',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03585536424340, 121.43143996596338],
        type: 'point',
        id: '842',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03589313367251, 121.43143840134145],
        type: 'point',
        id: '843',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03554693159983, 121.42965316772460],
        type: 'point',
        id: '844',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03558595769833, 121.42965521882560],
        type: 'point',
        id: '845',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03562498379683, 121.42965726992661],
        type: 'point',
        id: '846',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03566400989533, 121.42965932102761],
        type: 'point',
        id: '847',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03570303599383, 121.42966137212862],
        type: 'point',
        id: '848',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03574206209234, 121.42966342322963],
        type: 'point',
        id: '849',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03578108819084, 121.42966547433063],
        type: 'point',
        id: '850',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03582011428934, 121.42966752543164],
        type: 'point',
        id: '851',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03585914038784, 121.42966957653265],
        type: 'point',
        id: '852',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03589816648634, 121.42967162763365],
        type: 'point',
        id: '853',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03593719258485, 121.42967367873466],
        type: 'point',
        id: '854',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03597621868335, 121.42967572983567],
        type: 'point',
        id: '855',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03601524478185, 121.42967778093667],
        type: 'point',
        id: '856',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03605427088035, 121.42967983203768],
        type: 'point',
        id: '857',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03609329697886, 121.42968188313868],
        type: 'point',
        id: '858',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03613232307736, 121.42968393423969],
        type: 'point',
        id: '859',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617134917586, 121.42968598534070],
        type: 'point',
        id: '860',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710954229304, 121.43120348453522],
        type: 'point',
        id: '861',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707208885611, 121.43120103899170],
        type: 'point',
        id: '862',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03703463541919, 121.43119859344819],
        type: 'point',
        id: '863',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699718198226, 121.43119614790467],
        type: 'point',
        id: '864',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03695972854534, 121.43119370236116],
        type: 'point',
        id: '865',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03692227510841, 121.43119125681764],
        type: 'point',
        id: '866',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03688482167149, 121.43118881127413],
        type: 'point',
        id: '867',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03684736823456, 121.43118636573061],
        type: 'point',
        id: '868',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03680991479764, 121.43118392018710],
        type: 'point',
        id: '869',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03677246136072, 121.43118147464358],
        type: 'point',
        id: '870',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03673500792379, 121.43117902910006],
        type: 'point',
        id: '871',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03669755448687, 121.43117658355655],
        type: 'point',
        id: '872',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03666010104994, 121.43117413801303],
        type: 'point',
        id: '873',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03662264761302, 121.43117169246952],
        type: 'point',
        id: '874',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03658519417609, 121.43116924692600],
        type: 'point',
        id: '875',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03654774073917, 121.43116680138249],
        type: 'point',
        id: '876',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03651028730225, 121.43116435583897],
        type: 'point',
        id: '877',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03647283386532, 121.43116191029546],
        type: 'point',
        id: '878',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03643538042840, 121.43115946475194],
        type: 'point',
        id: '879',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03639792699147, 121.43115701920843],
        type: 'point',
        id: '880',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03636047355455, 121.43115457366491],
        type: 'point',
        id: '881',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03632302011762, 121.43115212812140],
        type: 'point',
        id: '882',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03628556668070, 121.43114968257788],
        type: 'point',
        id: '883',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03624811324378, 121.43114723703437],
        type: 'point',
        id: '884',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03621065980685, 121.43114479149085],
        type: 'point',
        id: '885',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03617320636993, 121.43114234594734],
        type: 'point',
        id: '886',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03613575293300, 121.43113990040382],
        type: 'point',
        id: '887',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03609829949608, 121.43113745486031],
        type: 'point',
        id: '888',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03606084605915, 121.43113500931679],
        type: 'point',
        id: '889',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03602339262223, 121.43113256377328],
        type: 'point',
        id: '890',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03598593918531, 121.43113011822976],
        type: 'point',
        id: '891',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03594848574838, 121.43112767268624],
        type: 'point',
        id: '892',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03591103231146, 121.43112522714273],
        type: 'point',
        id: '893',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03587357887453, 121.43112278159921],
        type: 'point',
        id: '894',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03765146950200, 121.43212884664536],
        type: 'point',
        id: '895',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03761679905112, 121.43214279413223],
        type: 'point',
        id: '896',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03758212860022, 121.43215674161911],
        type: 'point',
        id: '897',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03754745814934, 121.43217068910599],
        type: 'point',
        id: '898',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03751278769845, 121.43218463659286],
        type: 'point',
        id: '899',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03747811724756, 121.43219858407974],
        type: 'point',
        id: '900',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03744344679667, 121.43221253156662],
        type: 'point',
        id: '901',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03740877634578, 121.43222647905350],
        type: 'point',
        id: '902',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03737410589489, 121.43224042654037],
        type: 'point',
        id: '903',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03733943544400, 121.43225437402725],
        type: 'point',
        id: '904',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03730476499312, 121.43226832151413],
        type: 'point',
        id: '905',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03727009454223, 121.43228226900101],
        type: 'point',
        id: '906',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03723542409134, 121.43229621648788],
        type: 'point',
        id: '907',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03720075364045, 121.43231016397476],
        type: 'point',
        id: '908',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03716608318956, 121.43232411146164],
        type: 'point',
        id: '909',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03713141273867, 121.43233805894852],
        type: 'point',
        id: '910',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709674228778, 121.43235200643538],
        type: 'point',
        id: '911',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03706207183690, 121.43236595392226],
        type: 'point',
        id: '912',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03702740138601, 121.43237990140913],
        type: 'point',
        id: '913',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699273093512, 121.43239384889601],
        type: 'point',
        id: '914',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03695806048423, 121.43240779638289],
        type: 'point',
        id: '915',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03692339003334, 121.43242174386977],
        type: 'point',
        id: '916',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03688871958245, 121.43243569135664],
        type: 'point',
        id: '917',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03685404913156, 121.43244963884352],
        type: 'point',
        id: '918',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03681937868068, 121.43246358633040],
        type: 'point',
        id: '919',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03678470822979, 121.43247753381728],
        type: 'point',
        id: '920',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03675003777890, 121.43249148130415],
        type: 'point',
        id: '921',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03671536732801, 121.43250542879103],
        type: 'point',
        id: '922',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03668069687712, 121.43251937627791],
        type: 'point',
        id: '923',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03664602642623, 121.43253332376479],
        type: 'point',
        id: '924',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661135597534, 121.43254727125166],
        type: 'point',
        id: '925',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03769075707498, 121.43214225769043],
        type: 'point',
        id: '926',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03773004464795, 121.43215566873550],
        type: 'point',
        id: '927',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03776933222093, 121.43216907978058],
        type: 'point',
        id: '928',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03780861979390, 121.43218249082565],
        type: 'point',
        id: '929',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03784790736687, 121.43219590187073],
        type: 'point',
        id: '930',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03788719493985, 121.43220931291580],
        type: 'point',
        id: '931',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03774867592303, 121.43195450305937],
        type: 'point',
        id: '932',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03776082671843, 121.43199004232882],
        type: 'point',
        id: '933',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03777297751383, 121.43202558159828],
        type: 'point',
        id: '934',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03778512830923, 121.43206112086773],
        type: 'point',
        id: '935',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03779727910463, 121.43209666013718],
        type: 'point',
        id: '936',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03782644100089, 121.43213286995888],
        type: 'point',
        id: '937',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03785560289715, 121.43216907978058],
        type: 'point',
        id: '938',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03774989100279, 121.43190488219261],
        type: 'point',
        id: '939',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03775110608255, 121.43185526132584],
        type: 'point',
        id: '940',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03801113287494, 121.43228441476822],
        type: 'point',
        id: '941',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03804868974275, 121.43229928883639],
        type: 'point',
        id: '942',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03808624661055, 121.43231416290456],
        type: 'point',
        id: '943',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03812380347836, 121.43232903697275],
        type: 'point',
        id: '944',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03816136034617, 121.43234391104092],
        type: 'point',
        id: '945',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03819891721397, 121.43235878510909],
        type: 'point',
        id: '946',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03823647408177, 121.43237365917726],
        type: 'point',
        id: '947',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03827403094958, 121.43238853324543],
        type: 'point',
        id: '948',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03831158781739, 121.43240340731360],
        type: 'point',
        id: '949',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03834914468519, 121.43241828138179],
        type: 'point',
        id: '950',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03838670155300, 121.43243315544996],
        type: 'point',
        id: '951',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03842425842080, 121.43244802951813],
        type: 'point',
        id: '952',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03797144033442, 121.43226027488708],
        type: 'point',
        id: '953',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03793174779391, 121.43223613500595],
        type: 'point',
        id: '954',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03660892579320, 121.43281817436218],
        type: 'point',
        id: '955',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03664537849826, 121.43284392356873],
        type: 'point',
        id: '956',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03668183120332, 121.43286967277527],
        type: 'point',
        id: '957',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03671828390838, 121.43289542198181],
        type: 'point',
        id: '958',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03675473661344, 121.43292117118835],
        type: 'point',
        id: '959',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03679118931850, 121.43294692039490],
        type: 'point',
        id: '960',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661047227264, 121.43285621296276],
        type: 'point',
        id: '961',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661201875208, 121.43289425156333],
        type: 'point',
        id: '962',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661356523152, 121.43293229016390],
        type: 'point',
        id: '963',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661511171096, 121.43297032876448],
        type: 'point',
        id: '964',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661665819040, 121.43300836736505],
        type: 'point',
        id: '965',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661820466984, 121.43304640596563],
        type: 'point',
        id: '966',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661975114928, 121.43308444456619],
        type: 'point',
        id: '967',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03662129762872, 121.43312248316677],
        type: 'point',
        id: '968',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03662284410816, 121.43316052176735],
        type: 'point',
        id: '969',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03662439058760, 121.43319856036791],
        type: 'point',
        id: '970',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03662593706704, 121.43323659896849],
        type: 'point',
        id: '971',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03683736270191, 121.43302738666534],
        type: 'point',
        id: '972',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03687624550681, 121.43302425742149],
        type: 'point',
        id: '973',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03691512831170, 121.43302112817764],
        type: 'point',
        id: '974',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03695401111660, 121.43301799893379],
        type: 'point',
        id: '975',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699289392149, 121.43301486968994],
        type: 'point',
        id: '976',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03703177672639, 121.43301174044609],
        type: 'point',
        id: '977',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707065953128, 121.43300861120224],
        type: 'point',
        id: '978',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03681549109946, 121.43298447132111],
        type: 'point',
        id: '979',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
//980-985歪歪的
      {
        coordinates: [ 25.03676202717266, 121.43318831920624],
        type: 'point',
        id: '980',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03678997422604, 121.43316015601158],
        type: 'point',
        id: '981',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03681792127942, 121.43313199281693],
        type: 'point',
        id: '982',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03682764199106, 121.43306493759155],
        type: 'point',
        id: '983',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03671747386472, 121.43320351839066],
        type: 'point',
        id: '984',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03667292055677, 121.43321871757506],
        type: 'point',
        id: '985',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699532414531, 121.43397152423860],
        type: 'point',
        id: '986',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03705000304690, 121.43396750092506],
        type: 'point',
        id: '987',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710468194850, 121.43396347761153],
        type: 'point',
        id: '988',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710326434778, 121.43392525613307],
        type: 'point',
        id: '989',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710184674706, 121.43388703465460],
        type: 'point',
        id: '990',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03710042914635, 121.43384881317614],
        type: 'point',
        id: '991',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709901154563, 121.43381059169768],
        type: 'point',
        id: '992',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709759394491, 121.43377237021922],
        type: 'point',
        id: '993',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709617634419, 121.43373414874077],
        type: 'point',
        id: '994',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709475874348, 121.43369592726231],
        type: 'point',
        id: '995',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709334114276, 121.43365770578384],
        type: 'point',
        id: '996',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709192354204, 121.43361948430538],
        type: 'point',
        id: '997',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03709050594133, 121.43358126282692],
        type: 'point',
        id: '998',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708908834061, 121.43354304134846],
        type: 'point',
        id: '999',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708767073989, 121.43350481987000],
        type: 'point',
        id: '1000',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708625313917, 121.43346659839153],
        type: 'point',
        id: '1001',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708483553846, 121.43342837691307],
        type: 'point',
        id: '1002',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708341793774, 121.43339015543461],
        type: 'point',
        id: '1003',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708200033702, 121.43335193395615],
        type: 'point',
        id: '1004',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708058273630, 121.43331371247768],
        type: 'point',
        id: '1005',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707916513559, 121.43327549099922],
        type: 'point',
        id: '1006',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707774753487, 121.43323726952077],
        type: 'point',
        id: '1007',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707632993415, 121.43319904804231],
        type: 'point',
        id: '1008',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707491233343, 121.43316082656385],
        type: 'point',
        id: '1009',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707349473272, 121.43312260508539],
        type: 'point',
        id: '1010',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707207713200, 121.43308438360692],
        type: 'point',
        id: '1011',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03707065953128, 121.43304616212846],
        type: 'point',
        id: '1012',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699629621508, 121.43401175737382],
        type: 'point',
        id: '1013',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699726828485, 121.43405199050905],
        type: 'point',
        id: '1014',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699824035463, 121.43409222364427],
        type: 'point',
        id: '1015',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03699921242440, 121.43413245677949],
        type: 'point',
        id: '1016',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03695644134735, 121.43414318561554],
        type: 'point',
        id: '1017',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03698825450535, 121.43416561863638],
        type: 'point',
        id: '1018',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03702006766334, 121.43418805165724],
        type: 'point',
        id: '1019',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03705188082133, 121.43421048467809],
        type: 'point',
        id: '1020',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03708369397933, 121.43423291769895],
        type: 'point',
        id: '1021',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03711550713733, 121.43425535071979],
        type: 'point',
        id: '1022',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03714732029532, 121.43427778374065],
        type: 'point',
        id: '1023',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03717913345332, 121.43430021676150],
        type: 'point',
        id: '1024',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03721094661131, 121.43432264978236],
        type: 'point',
        id: '1025',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03724275976931, 121.43434508280320],
        type: 'point',
        id: '1026',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03727457292730, 121.43436751582406],
        type: 'point',
        id: '1027',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03730638608530, 121.43438994884491],
        type: 'point',
        id: '1028',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03691809842037, 121.43414616584778],
        type: 'point',
        id: '1029',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03687975549339, 121.43414914608002],
        type: 'point',
        id: '1030',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03684141256641, 121.43415212631226],
        type: 'point',
        id: '1031',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03680306963944, 121.43415510654449],
        type: 'point',
        id: '1032',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03676472671246, 121.43415808677673],
        type: 'point',
        id: '1033',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03672638378548, 121.43416106700897],
        type: 'point',
        id: '1034',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03668804085850, 121.43416404724121],
        type: 'point',
        id: '1035',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03664969793152, 121.43416702747345],
        type: 'point',
        id: '1036',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03661135500455, 121.43417000770569],
        type: 'point',
        id: '1037',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03657301207756, 121.43417298793793],
        type: 'point',
        id: '1038',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03653466915059, 121.43417596817017],
        type: 'point',
        id: '1039',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03649632622361, 121.43417894840240],
        type: 'point',
        id: '1040',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03645798329663, 121.43418192863464],
        type: 'point',
        id: '1041',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03641964036965, 121.43418490886688],
        type: 'point',
        id: '1042',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03638129744267, 121.43418788909912],
        type: 'point',
        id: '1043',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03634295451570, 121.43419086933136],
        type: 'point',
        id: '1044',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03630461158872, 121.43419384956360],
        type: 'point',
        id: '1045',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03626626866174, 121.43419682979584],
        type: 'point',
        id: '1046',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03622792573476, 121.43419981002808],
        type: 'point',
        id: '1047',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03618958280778, 121.43420279026031],
        type: 'point',
        id: '1048',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03615123988081, 121.43420577049255],
        type: 'point',
        id: '1049',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03611289695382, 121.43420875072479],
        type: 'point',
        id: '1050',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03607455402685, 121.43421173095703],
        type: 'point',
        id: '1051',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03603621109987, 121.43421471118927],
        type: 'point',
        id: '1052',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03599786817289, 121.43421769142151],
        type: 'point',
        id: '1053',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03595952524591, 121.43422067165375],
        type: 'point',
        id: '1054',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03592118231893, 121.43422365188599],
        type: 'point',
        id: '1055',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559553565384, 121.43406003713608],
        type: 'point',
        id: '1055',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559634572121, 121.43409825861454],
        type: 'point',
        id: '1056',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559715578859, 121.43413648009300],
        type: 'point',
        id: '1057',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559796585596, 121.43417470157146],
        type: 'point',
        id: '1058',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559877592334, 121.43421292304993],
        type: 'point',
        id: '1059',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03559958599071, 121.43425114452839],
        type: 'point',
        id: '1060',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560039605809, 121.43428936600685],
        type: 'point',
        id: '1061',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560120612547, 121.43432758748531],
        type: 'point',
        id: '1062',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560201619284, 121.43436580896378],
        type: 'point',
        id: '1063',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560282626022, 121.43440403044224],
        type: 'point',
        id: '1064',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560363632759, 121.43444225192070],
        type: 'point',
        id: '1065',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560444639497, 121.43448047339916],
        type: 'point',
        id: '1066',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03560525646234, 121.43451869487762],
        type: 'point',
        id: '1067',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03556637319295, 121.43452137708664],
        type: 'point',
        id: '1068',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03552748992355, 121.43452405929565],
        type: 'point',
        id: '1069',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03548860665416, 121.43452674150467],
        type: 'point',
        id: '1070',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03544972338476, 121.43452942371370],
        type: 'point',
        id: '1071',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03541084011537, 121.43453210592271],
        type: 'point',
        id: '1072',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03537195684597, 121.43453478813173],
        type: 'point',
        id: '1073',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03563725408270, 121.43405824899673],
        type: 'point',
        id: '1074',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03567897251156, 121.43405646085739],
        type: 'point',
        id: '1075',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03572069094042, 121.43405467271805],
        type: 'point',
        id: '1076',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03576240936928, 121.43405288457869],
        type: 'point',
        id: '1077',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03580412779815, 121.43405109643935],
        type: 'point',
        id: '1078',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536466622581, 121.43413513898851],
        type: 'point',
        id: '1079',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03531849226200, 121.43413648009302],
        type: 'point',
        id: '1080',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03527231829818, 121.43413782119751],
        type: 'point',
        id: '1081',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03522614433437, 121.43413916230202],
        type: 'point',
        id: '1082',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03517997037056, 121.43414050340652],
        type: 'point',
        id: '1083',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03516851366040, 121.43410141978946],
        type: 'point',
        id: '1084',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03515705695024, 121.43406233617237],
        type: 'point',
        id: '1085',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03514560024008, 121.43402325255531],
        type: 'point',
        id: '1086',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03513414352991, 121.43398416893822],
        type: 'point',
        id: '1087',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03512268681975, 121.43394508532116],
        type: 'point',
        id: '1088',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03511123010959, 121.43390600170407],
        type: 'point',
        id: '1089',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03509977339943, 121.43386691808701],
        type: 'point',
        id: '1090',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536539528783, 121.43417483568193],
        type: 'point',
        id: '1091',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536612434984, 121.43421453237535],
        type: 'point',
        id: '1092',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536685341186, 121.43425422906876],
        type: 'point',
        id: '1093',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536758247387, 121.43429392576218],
        type: 'point',
        id: '1094',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536831153589, 121.43433362245560],
        type: 'point',
        id: '1095',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536904059791, 121.43437331914902],
        type: 'point',
        id: '1096',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03536976965992, 121.43441301584244],
        type: 'point',
        id: '1097',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03537049872194, 121.43445271253584],
        type: 'point',
        id: '1098',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03537122778396, 121.43449240922926],
        type: 'point',
        id: '1099',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03506332021343, 121.43381327390671],
        type: 'point',
        id: '1100',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03502281664733, 121.43379002809525],
        type: 'point',
        id: '1101',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03498231308124, 121.43376678228378],
        type: 'point',
        id: '1102',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03494180951515, 121.43374353647232],
        type: 'point',
        id: '1103',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03490146791017, 121.43375587463379],
        type: 'point',
        id: '1104',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03486112630520, 121.43376821279526],
        type: 'point',
        id: '1105',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03482078470022, 121.43378055095671],
        type: 'point',
        id: '1106',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03478044309524, 121.43379288911818],
        type: 'point',
        id: '1107',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03474010149026, 121.43380522727965],
        type: 'point',
        id: '1108',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03454568380300, 121.43383473157883],
        type: 'point',
        id: '1109',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03450755958465, 121.43383473157883],
        type: 'point',
        id: '1110',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03446943536629, 121.43383473157883],
        type: 'point',
        id: '1111',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03443131114794, 121.43383473157883],
        type: 'point',
        id: '1112',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03439318692959, 121.43383473157883],
        type: 'point',
        id: '1113',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03435506271124, 121.43383473157883],
        type: 'point',
        id: '1114',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03431693849288, 121.43383473157883],
        type: 'point',
        id: '1115',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03427881427453, 121.43383473157883],
        type: 'point',
        id: '1116',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03424069005618, 121.43383473157883],
        type: 'point',
        id: '1117',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420256583782, 121.43383473157883],
        type: 'point',
        id: '1118',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03416444161947, 121.43383473157883],
        type: 'point',
        id: '1119',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03412631740112, 121.43383473157883],
        type: 'point',
        id: '1120',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03408819318277, 121.43383473157883],
        type: 'point',
        id: '1121',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03405006896441, 121.43383473157883],
        type: 'point',
        id: '1122',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03401194474606, 121.43383473157883],
        type: 'point',
        id: '1123',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03397382052771, 121.43383473157883],
        type: 'point',
        id: '1124',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03393569630935, 121.43383473157883],
        type: 'point',
        id: '1125',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03388830670660, 121.43381729722023],
        type: 'point',
        id: '1126',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03384091710385, 121.43379986286162],
        type: 'point',
        id: '1127',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03458505338428, 121.43382883071899],
        type: 'point',
        id: '1128',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03462442296556, 121.43382292985916],
        type: 'point',
        id: '1129',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03466379254684, 121.43381702899931],
        type: 'point',
        id: '1130',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03470316212812, 121.43381112813948],
        type: 'point',
        id: '1131',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03417385911800, 121.43377572298050],
        type: 'point',
        id: '1132',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420204977424, 121.43374621868134],
        type: 'point',
        id: '1133',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423024043048, 121.43371671438217],
        type: 'point',
        id: '1134',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03425843108671, 121.43368721008301],
        type: 'point',
        id: '1135',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03428662174295, 121.43365770578384],
        type: 'point',
        id: '1136',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03431481239919, 121.43362820148468],
        type: 'point',
        id: '1137',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03433522630245, 121.43366414308548],
        type: 'point',
        id: '1138',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03435564020571, 121.43370008468628],
        type: 'point',
        id: '1139',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03437605410898, 121.43373602628706],
        type: 'point',
        id: '1140',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03439646801224, 121.43377196788786],
        type: 'point',
        id: '1141',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03441688191550, 121.43380790948866],
        type: 'point',
        id: '1142',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03413416533582, 121.43379449844360],
        type: 'point',
        id: '1143',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03409447155364, 121.43381327390671],
        type: 'point',
        id: '1144',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03471822951582, 121.43409758806229],
        type: 'point',
        id: '1145',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03471933416104, 121.43413806503469],
        type: 'point',
        id: '1146',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472043880625, 121.43417854200710],
        type: 'point',
        id: '1147',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472154345147, 121.43421901897950],
        type: 'point',
        id: '1148',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472264809669, 121.43425949595191],
        type: 'point',
        id: '1149',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472375274191, 121.43429997292432],
        type: 'point',
        id: '1150',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472485738712, 121.43434044989672],
        type: 'point',
        id: '1151',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472596203234, 121.43438092686914],
        type: 'point',
        id: '1152',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472706667756, 121.43442140384154],
        type: 'point',
        id: '1153',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472817132278, 121.43446188081394],
        type: 'point',
        id: '1154',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472927596799, 121.43450235778636],
        type: 'point',
        id: '1155',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03473038061321, 121.43454283475876],
        type: 'point',
        id: '1156',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03469041694741, 121.43454492092133],
        type: 'point',
        id: '1157',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03465045328161, 121.43454700708389],
        type: 'point',
        id: '1158',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03461048961581, 121.43454909324646],
        type: 'point',
        id: '1159',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03457052595001, 121.43455117940903],
        type: 'point',
        id: '1160',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03453056228422, 121.43455326557158],
        type: 'point',
        id: '1161',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03449059861842, 121.43455535173415],
        type: 'point',
        id: '1162',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03445063495262, 121.43455743789671],
        type: 'point',
        id: '1163',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03441067128682, 121.43455952405928],
        type: 'point',
        id: '1164',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03437070762102, 121.43456161022185],
        type: 'point',
        id: '1165',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03469076800362, 121.43407183885574],
        type: 'point',
        id: '1166',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03466330649142, 121.43404608964920],
        type: 'point',
        id: '1167',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03463584497923, 121.43402034044266],
        type: 'point',
        id: '1168',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03460838346703, 121.43399459123611],
        type: 'point',
        id: '1169',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03458092195483, 121.43396884202957],
        type: 'point',
        id: '1170',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03455346044263, 121.43394309282301],
        type: 'point',
        id: '1171',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03452599893043, 121.43391734361647],
        type: 'point',
        id: '1172',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03449853741823, 121.43389159440993],
        type: 'point',
        id: '1173',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03447107590603, 121.43386584520339],
        type: 'point',
        id: '1174',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03420545210888, 121.43440872430800],
        type: 'point',
        id: '1175',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03419694630415, 121.43436044454575],
        type: 'point',
        id: '1176',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03418844049941, 121.43431216478348],
        type: 'point',
        id: '1177',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03414739655160, 121.43431276082993],
        type: 'point',
        id: '1178',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03410635260379, 121.43431335687637],
        type: 'point',
        id: '1179',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03406530865598, 121.43431395292282],
        type: 'point',
        id: '1180',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03402426470817, 121.43431454896927],
        type: 'point',
        id: '1181',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03398322076035, 121.43431514501572],
        type: 'point',
        id: '1182',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03394217681254, 121.43431574106216],
        type: 'point',
        id: '1183',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03390113286473, 121.43431633710861],
        type: 'point',
        id: '1184',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03386008891692, 121.43431693315506],
        type: 'point',
        id: '1185',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03381904496911, 121.43431752920151],
        type: 'point',
        id: '1186',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03423801716601, 121.43443876504897],
        type: 'point',
        id: '1187',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03427058222313, 121.43446880578993],
        type: 'point',
        id: '1188',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03430314728026, 121.43449884653091],
        type: 'point',
        id: '1189',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03433571233738, 121.43452888727188],
        type: 'point',
        id: '1190',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03335243849887, 121.43499881029129],
        type: 'point',
        id: '1191',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03331517469987, 121.43501579761505],
        type: 'point',
        id: '1192',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03327791090087, 121.43503278493880],
        type: 'point',
        id: '1193',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324064710187, 121.43504977226256],
        type: 'point',
        id: '1194',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322788828470, 121.43501238897441],
        type: 'point',
        id: '1195',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03321512946753, 121.43497500568627],
        type: 'point',
        id: '1196',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03320237065035, 121.43493762239812],
        type: 'point',
        id: '1197',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03318961183318, 121.43490023910998],
        type: 'point',
        id: '1198',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03317685301600, 121.43486285582183],
        type: 'point',
        id: '1199',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03316409419883, 121.43482547253369],
        type: 'point',
        id: '1200',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03315133538165, 121.43478808924554],
        type: 'point',
        id: '1201',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03313857656448, 121.43475070595740],
        type: 'point',
        id: '1202',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03312581774730, 121.43471332266925],
        type: 'point',
        id: '1203',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03311305893013, 121.43467593938111],
        type: 'point',
        id: '1204',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03310030011295, 121.43463855609296],
        type: 'point',
        id: '1205',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03308754129578, 121.43460117280482],
        type: 'point',
        id: '1206',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03307478247860, 121.43456378951667],
        type: 'point',
        id: '1207',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03306202366143, 121.43452640622853],
        type: 'point',
        id: '1208',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03304926484426, 121.43448902294038],
        type: 'point',
        id: '1209',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03303650602708, 121.43445163965224],
        type: 'point',
        id: '1210',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03337353741854, 121.43496796488762],
        type: 'point',
        id: '1211',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03339463633821, 121.43493711948395],
        type: 'point',
        id: '1212',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03341573525788, 121.43490627408028],
        type: 'point',
        id: '1213',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03343683417755, 121.43487542867661],
        type: 'point',
        id: '1214',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03345793309723, 121.43484458327293],
        type: 'point',
        id: '1215',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03347903201690, 121.43481373786926],
        type: 'point',
        id: '1216',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03350013093657, 121.43478289246559],
        type: 'point',
        id: '1217',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03352122985624, 121.43475204706192],
        type: 'point',
        id: '1218',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03354232877591, 121.43472120165825],
        type: 'point',
        id: '1219',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03356342769559, 121.43469035625458],
        type: 'point',
        id: '1220',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03358452661526, 121.43465951085091],
        type: 'point',
        id: '1221',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03360562553493, 121.43462866544722],
        type: 'point',
        id: '1222',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03362672445460, 121.43459782004355],
        type: 'point',
        id: '1223',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03364782337427, 121.43456697463988],
        type: 'point',
        id: '1224',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03366892229395, 121.43453612923621],
        type: 'point',
        id: '1225',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03369002121362, 121.43450528383254],
        type: 'point',
        id: '1226',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03371112013329, 121.43447443842886],
        type: 'point',
        id: '1227',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03373221905296, 121.43444359302519],
        type: 'point',
        id: '1228',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03375331797263, 121.43441274762152],
        type: 'point',
        id: '1229',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03377441689230, 121.43438190221785],
        type: 'point',
        id: '1230',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03379551581198, 121.43435105681418],
        type: 'point',
        id: '1231',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
//1232-1244歪歪的
      {
        coordinates: [ 25.03325765884277, 121.43443018198013],
        type: 'point',
        id: '1232',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03328925206554, 121.43439799547195],
        type: 'point',
        id: '1233',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03332084528830, 121.43436580896376],
        type: 'point',
        id: '1234',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03330815399104, 121.43432676792143],
        type: 'point',
        id: '1235',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03329546269379, 121.43428772687911],
        type: 'point',
        id: '1236',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03328277139653, 121.43424868583679],
        type: 'point',
        id: '1237',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03327008009927, 121.43420964479446],
        type: 'point',
        id: '1238',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03325738880202, 121.43417060375214],
        type: 'point',
        id: '1239',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03324469750476, 121.43413156270981],
        type: 'point',
        id: '1240',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03323200620750, 121.43409252166749],
        type: 'point',
        id: '1241',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03321931491024, 121.43405348062517],
        type: 'point',
        id: '1242',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03320662361299, 121.43401443958284],
        type: 'point',
        id: '1243',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03322363535389, 121.43440872430801],
        type: 'point',
        id: '1244',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03318961186502, 121.43438726663589],
        type: 'point',
        id: '1245',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03315194296875, 121.43440268933773],
        type: 'point',
        id: '1246',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03311427407249, 121.43441811203957],
        type: 'point',
        id: '1247',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03307660517622, 121.43443353474139],
        type: 'point',
        id: '1248',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03303893627995, 121.43444895744322],
        type: 'point',
        id: '1249',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03317611047012, 121.43434852361679],
        type: 'point',
        id: '1250',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03316260907521, 121.43430978059769],
        type: 'point',
        id: '1251',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03314910768031, 121.43427103757858],
        type: 'point',
        id: '1252',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03313560628540, 121.43423229455948],
        type: 'point',
        id: '1253',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03312210489050, 121.43419355154036],
        type: 'point',
        id: '1254',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03310860349559, 121.43415480852126],
        type: 'point',
        id: '1255',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03309510210069, 121.43411606550215],
        type: 'point',
        id: '1256',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03308160070578, 121.43407732248305],
        type: 'point',
        id: '1257',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03336945022427, 121.43398493528366],
        type: 'point',
        id: '1258',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03338173645846, 121.43402203917503],
        type: 'point',
        id: '1259',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03339402269266, 121.43405914306641],
        type: 'point',
        id: '1260',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03340630892685, 121.43409624695778],
        type: 'point',
        id: '1261',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03341859516105, 121.43413335084915],
        type: 'point',
        id: '1262',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03343088139524, 121.43417045474052],
        type: 'point',
        id: '1263',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03344316762944, 121.43420755863190],
        type: 'point',
        id: '1264',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03345545386364, 121.43424466252327],
        type: 'point',
        id: '1265',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03346774009783, 121.43428176641464],
        type: 'point',
        id: '1266',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03348002633203, 121.43431887030602],
        type: 'point',
        id: '1267',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03349231256622, 121.43435597419739],
        type: 'point',
        id: '1268',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03350459880042, 121.43439307808876],
        type: 'point',
        id: '1269',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03351688503461, 121.43443018198013],
        type: 'point',
        id: '1270',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03352917126881, 121.43446728587151],
        type: 'point',
        id: '1271',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03354145750300, 121.43450438976288],
        type: 'point',
        id: '1272',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03355374373720, 121.43454149365425],
        type: 'point',
        id: '1273',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03356602997139, 121.43457859754562],
        type: 'point',
        id: '1274',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03357831620559, 121.43461570143700],
        type: 'point',
        id: '1275',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03465990423159, 121.43398761749268],
        type: 'point',
        id: '1276',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03467642972715, 121.43395060300827],
        type: 'point',
        id: '1277',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03469295522271, 121.43391358852386],
        type: 'point',
        id: '1278',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03470948071827, 121.43387657403946],
        type: 'point',
        id: '1279',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03472600621383, 121.43383955955505],
        type: 'point',
        id: '1280',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03496611166443, 121.43367111682892],
        type: 'point',
        id: '1281',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03495315051326, 121.43363296985626],
        type: 'point',
        id: '1282',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03494018936210, 121.43359482288361],
        type: 'point',
        id: '1283',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03492722821093, 121.43355667591095],
        type: 'point',
        id: '1284',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03491426705977, 121.43351852893829],
        type: 'point',
        id: '1285',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03490130590861, 121.43348038196565],
        type: 'point',
        id: '1286',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03488834475744, 121.43344223499300],
        type: 'point',
        id: '1287',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03487538360627, 121.43340408802034],
        type: 'point',
        id: '1288',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03486242245511, 121.43336594104768],
        type: 'point',
        id: '1289',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03484946130395, 121.43332779407503],
        type: 'point',
        id: '1290',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },
      {
        coordinates: [ 25.03495517569736, 121.43370732665062],
        type: 'point',
        id: '1291',
        annotationImage: {
            source: { uri: 'bean' },
            height: 9,
            width: 9
          },
      },

     
      ]
      
    }
  },
  componentDidUpdate(){
    
  },

  onUpdateUserLocation(location){
    //console.log(location.latitude);
    //console.log(location.longitude);
    

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
            height: 75,
            width: 75
          },
        id: 'Pacman'
      }]
    });
    
    // reloading
    this.forceUpdate();
    //this.removeMarker();
    
  },

  calculateDistance(Lat: number, Lon: number){
    // let xd = (Lat - this.state.UserLat)*110000;
    // //console.log("Lat:"+Lat+",UserLat:"+this.state.UserLat);
    // let yd = (Lon - this.state.UserLon)*110000;
    // //console.log("x:"+xd+",y:"+yd);

    // //經度一度大概是111公里
    // //緯度一度大概是110公里
    // //為了計算方便，統一當做110公里來做計算好了
    // let distance = Math.round(Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2)));
    // //110*1000 = 110000公尺
    // //console.log(Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2)));
    // return distance;
  },
  onOpenAnnotation(annotation) {
    //console.log(annotation.title);
    //console.log(annotation.latitude);
    //console.log(annotation.longitude);
    // let distance=this.calculateDistance(annotation.latitude,annotation.longitude);

    //console.log(distance+"公尺");//單位為公尺
    //小於7公尺，豆子則消失
    // if(distance<7 && annotation.id!='Pacman'){
    //   this.state = {
    //     annotations: this.state.annotations.filter(a => a.id !== annotation.id),
    //     Score: this.state.Score + 10  
        
    //   }
    // }
    
    
    // reloading
    //this.forceUpdate();

  },
  onPress_Zoom(){
    let temp = 19;
    if(this.state.zoomOut != true){
      temp = 16;
    }
    this._map && this._map.setZoomLevel(temp)
    this.setState({
      zoomOut: !(this.state.zoomOut),
    });
  },
  onPress_Center(){
    this._map && this._map.setCenterCoordinate(this.state.UserLat,this.state.UserLon);
  },
  onPressOut_explore() {
    //this.removeMarker();
    
  },
  removeMarker(){
    let Counter = 0;
    this.setState({
      annotations: this.state.annotations.filter(a =>  {

          if(a.id == 'Pacman'){
            return a;
          }
          //在annotation上該id不應存在的會消逝
          //0.000045-->5m , 0.000044-->5m
          if(!(Math.abs(a.coordinates[0]-this.state.UserLat)<0.000045*3 && Math.abs(a.coordinates[1]-this.state.UserLon)<0.000044*3))
          {
              return a;
          }
            Counter++;  
            
        }),
      Score: this.state.Score + 10*Counter,  
    });

    //this.forceUpdate();
    

  },
  render() {
   
    return (
      <View style={styles.container}>
        <View style={styles.Score}>
            <Text style={styles.welcome}>
              Score
            </Text>
            <Text style={styles.welcome}>
              {this.state.Score}
            </Text>
          </View>  
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
        <TouchableOpacity style={{position: 'absolute',left: width-70,top: height-150,elevation:10}}>
          <Icon.Button name={(this.state.zoomOut)? "zoom-in" : "zoom-out"} color="#FFFFFF" backgroundColor="#C200DD" 
            size={33} iconStyle={{margin: 7}} borderRadius={100} onPress={this.onPress_Zoom}></Icon.Button>
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute',left: width-70,top: height-230,elevation:10}}>
          <Icon.Button name="gps-fixed" color="#FFF" backgroundColor="#19C6EC" borderRadius={100}
            size={30} iconStyle={{margin: 10}} onPress={this.onPress_Center}></Icon.Button>
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute',left: width-70,top: height-310,elevation:10}}>
          <Icon_1.Button name="magnet" color="#FFF" backgroundColor="#F3007C" borderRadius={100}
            size={30} iconStyle={{margin: 10}} onPress={this.removeMarker}></Icon_1.Button>
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
    flex: 8,
  },
  Score: {
    flex: 1,
    backgroundColor: '#000000'
  },
  welcome: {
    flex: 1,
    fontWeight: "bold",
    fontFamily: 'monospace',
    fontSize: 18,
    color: 'white',
    textAlign: 'center' 
  }
  
});

module.exports = MainMap;