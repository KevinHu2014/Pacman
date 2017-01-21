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
      zoom: 19,
      zoomOut: false,
      userTrackingMode: Mapbox.userTrackingMode.follow,
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

    // reloading
    this.forceUpdate();

  },

  calculateDistance(Lat: number, Lon: number){
    let xd = (Lat - this.state.UserLat)*110000;
    //console.log("Lat:"+Lat+",UserLat:"+this.state.UserLat);
    let yd = (Lon - this.state.UserLon)*110000;
    //console.log("x:"+xd+",y:"+yd);

    //經度一度大概是111公里
    //緯度一度大概是110公里
    //為了計算方便，統一當做110公里來做計算好了
    let distance = Math.round(Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2)));
    //110*1000 = 110000公尺
    //console.log(Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2)));
    return distance;
  },
  onOpenAnnotation(annotation) {
    //console.log(annotation.title);
    //console.log(annotation.latitude);
    //console.log(annotation.longitude);
    let distance=this.calculateDistance(annotation.latitude,annotation.longitude);

    //console.log(distance+"公尺");//單位為公尺
    //小於7公尺，豆子則消失
    if(distance<7 && annotation.id!='Pacman'){
      this.state = {
        annotations: this.state.annotations.filter(a => a.id !== annotation.id),
        Score: this.state.Score + 10  
        
      }
    }
    
    
    // reloading
    //this.forceUpdate();

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
    this.removeMarker();
    
  },
  removeMarker(){
    let Counter = 0;
    console.log("UserLat:"+this.state.UserLat+",UserLon:"+this.state.UserLon);
    this.setState({
      annotations: this.state.annotations.filter(a =>  {
          //在annotation上該id不應存在的會消逝
          if(!(Math.abs(a.coordinates[0]-this.state.UserLat)<0.00005 && Math.abs(a.coordinates[1]-this.state.UserLon)<0.000033 && a.id!='Pacman'))
          {
              return a;
          }
          
            Counter++;  

        }),
      Score: this.state.Score + 10*Counter  
    });

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
        <TouchableOpacity
                //onPressIn={this.onPressIn_explore}
                onPressOut={this.onPressOut_explore}
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
    flex: 8,
  },
  Score: {
    flex: 1,
    backgroundColor: '#000000'
  },
  welcome: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 18,
    color: 'white',
    textAlign: 'center' 
  }
  
});

module.exports = MainMap;