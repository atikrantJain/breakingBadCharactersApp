import React, {useEffect} from 'react';
import {FlatList, Image, Platform, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import CharacterCard from '../../components/card';
import Header from '../../components/header';
import {
  addCharacterToFavourites,
  removeCharacterFromFavourites,
  saveCharacterData,
} from '../../redux/actions';
import {AXIOS_KIT} from '../../utils/api';
import {GET_CHARACTERS} from '../../utils/constants';
import {appStyles} from '../../utils/commonStyles';

const HomeScreen = ({navigation}) => {
  const characterData = useSelector(state => state.characterData);
  const favouritesData = useSelector(state => state.favouritesData);
  const dispatch = useDispatch();

  useEffect(() => {
    AXIOS_KIT('GET', GET_CHARACTERS)
      .then(response => {
        const apiData = response.data;
        if (Array.isArray(apiData)) {
          dispatch(saveCharacterData(apiData));
        }
      })
      .catch(error => {});
  }, []);

  const iconSection = () => {
    return (
      <View style={[appStyles.aEnd, appStyles.fRow, appStyles.jSpaceAround]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchCharacter')}>
          <Fontisto
            name="search"
            style={[appStyles.colorTextWhite]}
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('favourites')}>
          <Image
            source={require('../../assets/icons/HEART_FILLED.png')}
            width={50}
            height={50}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const isDataPresent = data => {
    const filterData = favouritesData.filter(
      ele => ele.char_id === data.char_id,
    );
    return filterData.length > 0 ? true : false;
  };

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
        height={60}
      />

      <View style={[appStyles.flex1, appStyles.mg10]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={[appStyles.jSpace]}
          data={characterData}
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
                  if (!isDataPresent(e)) {
                    dataToPush.push(e);
                    dispatch(addCharacterToFavourites(dataToPush));
                  } else {
                    const index = favouritesData.findIndex(
                      ele => ele.char_id === e.char_id,
                    );
                    dataToPush.splice(index, 1);
                    dispatch(removeCharacterFromFavourites(dataToPush));
                  }
                }}
                isFavourite={isDataPresent(item)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
