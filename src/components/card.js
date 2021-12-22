import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';

const CharacterCard = ({
  data,
  index,
  onClickCharacter,
  onClickFavourite,
  isFavourite,
  showFavouriteIcon = true,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onClickCharacter(data)}
        activeOpacity={0.5}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: Dimensions.get('screen').width * 0.45,
          minHeight: 180,
          borderWidth: 1,
        }}>
        <Image
          source={{
            uri: data?.img,
          }}
          style={{
            width: Dimensions.get('screen').width * 0.45,
            height: 250,
            resizeMode: 'center',
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 0.8, marginBottom: 5}}>
          <Text style={{color: 'white', fontSize: 18}}>{data?.name}</Text>
          <Text style={{color: 'white', fontSize: 12}}>{data?.nickname}</Text>
        </View>
        {showFavouriteIcon && (
          <TouchableOpacity onPress={() => onClickFavourite(data)}>
            <Image
              source={
                isFavourite
                  ? require('../assets/icons/HEART_FILLED.png')
                  : require('../assets/icons/HEART.png')
              }
              width={50}
              height={50}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CharacterCard;
