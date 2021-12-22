import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/header';
import Entypo from 'react-native-vector-icons/Entypo';
import CharacterCard from '../../components/card';
import {useDispatch, useSelector} from 'react-redux';
import {removeCharacterFromFavourites} from '../../redux/actions';

const Favourites = ({navigation}) => {
  const iconSection = () => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Entypo name="cross" size={30} color={'#FFFFFF'} />
      </TouchableOpacity>
    );
  };

  const favouritesData = useSelector(state => state.favouritesData);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Header
        showRightIcon={true}
        iconSection={iconSection}
        headerStyles={{
          marginTop: 40,
          marginHorizontal: 15,
          alignItems: 'center',
        }}
        headertext="Favourites"
        height={60}
        headerTextStyles={{color: '#18CA75', fontSize: 24, letterSpacing: 1}}
      />

      <View style={{flex: 1, margin: 10}}>
        {favouritesData.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={favouritesData}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <CharacterCard
                  data={item}
                  index={index}
                  onClickCharacter={e => {
                    navigation.navigate('CharacterDetails', {
                      data: e,
                    });
                  }}
                  onClickFavourite={e => {
                    let dataToPush = [...favouritesData];

                    const index = favouritesData.findIndex(
                      ele => ele.char_id === e.char_id,
                    );
                    dataToPush.splice(index, 1);
                    dispatch(removeCharacterFromFavourites(dataToPush));
                  }}
                  isFavourite={true}
                />
              );
            }}
          />
        ) : (
          <View
            style={{
              marginTop: '70%',
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                color: '#FFFFFF',
                letterSpacing: 1,
                marginBottom: 8,
                textAlign: 'center',
              }}>
              No characters found in favourites!!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Favourites;
