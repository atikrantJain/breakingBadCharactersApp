import React from 'react';
import {View, Text} from 'react-native';

const Header = ({
  height = 80,
  headertext = 'The Breaking Bad',
  showRightIcon = true,
  iconSection,
  headerStyles,
  headerTextStyles,
}) => {
  return (
    <View style={[{height: height, flexDirection: 'row'}, headerStyles]}>
      <Text
        style={[
          {color: 'white', flex: 1, fontSize: 22, fontWeight: '700'},
          headerTextStyles,
        ]}>
        {headertext}
      </Text>
      {showRightIcon && <View style={{flex: 0.4}}>{iconSection()}</View>}
    </View>
  );
};

export default Header;
