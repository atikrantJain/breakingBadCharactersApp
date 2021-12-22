import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  w100: {width: '100%'},
  w90: {width: '90%'},
  w80: {width: '80%'},
  w70: {width: '70%'},
  w60: {width: '60%'},
  w50: {width: '50%'},
  w40: {width: '40%'},
  w30: {width: '30%'},
  wAuto: {width: 'auto'},

  flex1: {flex: 1},
  flexHalf: {flex: 0.5},
  flex1Fourth: {flex: 0.4},
  flex1Ninth: {flex: 0.9},
  flex1Two: {flex: 0.3},
  flexP8: {flex: 0.8},
  flexP7: {flex: 0.7},
  flexP6: {flex: 0.6},
  flexP4: {flex: 0.4},
  flexP3: {flex: 0.3},
  flexP1: {flex: 0.1},
  fRow: {flexDirection: 'row'},
  fWrap: {flexWrap: 'wrap'},

  //Justify content and item
  aCenter: {alignItems: 'center'},
  jCenter: {justifyContent: 'center'},
  jSpace: {justifyContent: 'space-between'},
  jEvenly: {justifyContent: 'space-evenly'},
  jSpaceAround: {justifyContent: 'space-around'},
  aStart: {alignItems: 'flex-start'},
  jStart: {justifyContent: 'flex-start'},
  aEnd: {alignItems: 'flex-end'},
  jEnd: {justifyContent: 'flex-end'},
  aSelfEnd: {alignSelf: 'flex-end'},
  aSelfStart: {alignSelf: 'flex-start'},
  aSelfCenter: {alignSelf: 'center'},

  //Text align
  tCenter: {textAlign: 'center'},
  tRight: {textAlign: 'right'},
  tLeft: {textAlign: 'left'},

  //Paddings
  pad5: {padding: 5},
  pad10: {padding: 10},
  pad15: {padding: 15},
  pad20: {padding: 20},
  pad25: {padding: 25},
  pad30: {padding: 30},
  pad35: {padding: 35},

  //Paddings Vertical

  padV5: {paddingVertical: 5},
  padV10: {paddingVertical: 10},
  padV15: {paddingVertical: 15},
  padV20: {paddingVertical: 20},
  padV25: {paddingVertical: 25},
  padV30: {paddingVertical: 30},
  padV35: {paddingVertical: 35},
  padV40: {paddingVertical: 40},

  //Paddings Horizontal

  padH5: {paddingHorizontal: 5},
  padH10: {paddingHorizontal: 10},
  padH15: {paddingHorizontal: 15},
  padH20: {paddingHorizontal: 20},
  padH25: {paddingHorizontal: 25},
  padH30: {paddingHorizontal: 30},

  //Padding Top
  padT5: {paddingTop: 5},
  padT10: {paddingTop: 10},
  padT15: {paddingTop: 15},
  padT20: {paddingTop: 20},
  padT25: {paddingTop: 25},
  padT30: {paddingTop: 30},

  //Padding Bottom
  padB5: {paddingBottom: 5},
  padB10: {paddingBottom: 10},
  padB15: {paddingBottom: 15},
  padB20: {paddingBottom: 20},
  padB25: {paddingBottom: 25},
  padB30: {paddingBottom: 30},

  //Padding left
  padL5: {paddingLeft: 5},
  padL10: {paddingLeft: 10},
  padL15: {paddingLeft: 15},
  padL20: {paddingLeft: 20},
  padL25: {paddingLeft: 25},
  padL30: {paddingLeft: 30},

  //Padding right
  padR5: {paddingRight: 5},
  padR10: {paddingRight: 10},
  padR15: {paddingRight: 15},
  padR20: {paddingRight: 20},
  padR25: {paddingRight: 25},
  padR30: {paddingRight: 30},

  //Margin
  mg10: {margin: 10},
  mg20: {margin: 20},
  mg15: {margin: 15},

  //Margin Left

  mgL10: {marginLeft: 10},
  mgL15: {marginLeft: 15},
  mgL20: {marginLeft: 20},
  mgL5: {marginLeft: 5},

  //Margin Right

  mgR10: {marginRight: 10},
  mgR15: {marginRight: 15},
  mgR20: {marginRight: 20},

  mgR5: {marginRight: 5},

  //Margin Vertical

  mgV5: {marginVertical: 5},
  mgV10: {marginVertical: 10},
  mgV15: {marginVertical: 15},
  mgV20: {marginVertical: 20},
  mgV25: {marginVertical: 25},
  mgV30: {marginVertical: 30},
  mgV40: {marginVertical: 40},

  //Margin Horizontal

  mgH5: {marginHorizontal: 5},
  mgH10: {marginHorizontal: 10},
  mgH15: {marginHorizontal: 15},
  mgH20: {marginHorizontal: 20},
  mgH25: {marginHorizontal: 25},
  mgH30: {marginHorizontal: 30},

  //Margin Top

  mgT5: {marginTop: 5},
  mgT10: {marginTop: 10},
  mgT15: {marginTop: 15},
  mgT20: {marginTop: 20},
  mgT25: {marginTop: 25},
  mgT30: {marginTop: 30},
  mgT40: {marginTop: 40},

  //Margin Bottom
  mgB0: {marginBottom: 0},
  mgB5: {marginBottom: 5},
  mgB3: {marginBottom: 3},

  mgB8: {marginBottom: 8},
  mgB10: {marginBottom: 10},
  mgB15: {marginBottom: 15},
  mgB20: {marginBottom: 20},
  mgB25: {marginBottom: 25},
  mgB30: {marginBottom: 30},

  //Font weight
  fW400: {fontWeight: '400'},
  fW500: {fontWeight: '500'},
  fW600: {fontWeight: '600'},
  fW700: {fontWeight: '700'},
  fW800: {fontWeight: '800'},
  fwNormal: {fontWeight: 'normal'},
  fwBold: {fontWeight: 'bold'},

  //Font Size

  FONT14: {fontSize: 14},
  FONT16: {fontSize: 16},
  FONT18: {fontSize: 18},
  FONT20: {fontSize: 20},
  FONT22: {fontSize: 22},
  FONT24: {fontSize: 24},
  FONT25: {fontSize: 25},
  FONT26: {fontSize: 26},

  FONT30: {fontSize: 30},

  //border styles

  borderBottomWidth0: {borderBottomWidth: 0},
  borderTopWidth0: {borderTopWidth: 0},
  borderRightWidth: {borderRightWidth: 0.8},
  borderRadius5: {borderRadius: 5},
  borderRadius10: {borderRadius: 10},

  txtCntr: {textAlign: 'center'},
  lSpace1: {letterSpacing: 1},
  lSpace2: {letterSpacing: 2},

  colorGreen: {backgroundColor: '#18CA75'},
  colorGrey: {backgroundColor: '#242424'},
  colorWhite: {backgroundColor: '#FFFFFF'},
  colorBlack: {backgroundColor: 'black'},

  colorPlaceholder: {color: '#D7DBDD'},
  colorTextGreen: {color: '#18CA75'},
  colorTextWhite: {color: '#FFFFFF'},

  centerPositioning: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {resizeMode: 'cover', opacity: 0.4},
  imageDimensions: {
    width: 240,
    height: 300,
  },
  seasonBlock: {
    width: 100,
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    padding: 5,
  },
  viewAllBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
});
