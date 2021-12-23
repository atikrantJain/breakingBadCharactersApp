import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Platform} from 'react-native';
import Header from '../../components/header';
import Entypo from 'react-native-vector-icons/Entypo';
import CharacterCard from '../../components/card';
import {useDispatch, useSelector} from 'react-redux';
import {removeCharacterFromFavourites} from '../../redux/actions';
import {appStyles} from '../../utils/commonStyles';

const Favourites = ({navigation}) => {
  const iconSection = () => {
    return (
      <TouchableOpacity
        style={[appStyles.aEnd, appStyles.jCenter]}
        onPress={() => navigation.goBack()}>
        <Entypo name="cross" size={30} color={'#FFFFFF'} />
      </TouchableOpacity>
    );
  };

  const favouritesData = useSelector(state => state.favouritesData);
  const dispatch = useDispatch();

  return (
    <View style={[appStyles.flex1, appStyles.colorBlack]}>
      <Header
        showRightIcon={true}
        iconSection={iconSection}
        headerStyles={[
          Platform.OS === 'ios' ? appStyles.mgT40 : appStyles.mgT5,
          appStyles.mgH15,
          appStyles.aCenter,
        ]}
        headertext="Favourites"
        height={60}
        headerTextStyles={[
          appStyles.colorTextGreen,
          appStyles.FONT24,
          appStyles.lSpace1,
        ]}
      />

      <View style={[appStyles.flex1, appStyles.mg10]}>
        {favouritesData.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={[appStyles.jSpace]}
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
          <View style={[appStyles.centerPositioning, appStyles.mgH5]}>
            <Text
              style={[
                appStyles.FONT24,
                appStyles.colorTextWhite,
                appStyles.lSpace1,
                appStyles.mgB8,
                appStyles.tCenter,
              ]}>
              No characters found in favourites!!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Favourites;
