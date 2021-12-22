import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import CharacterCard from '../../components/card';
import {
  addCharacterToFavourites,
  removeCharacterFromFavourites,
} from '../../redux/actions';
import {AXIOS_KIT} from '../../utils/api';
import {ScreenDimensions} from '../../utils/commonMethods';
import {SEARCH_CHARACTER_BY_NAME} from '../../utils/constants';
import {appStyles} from '../../utils/commonStyles';

const SearchCharacter = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [getSearchedData, setSearchedData] = useState([]);

  const favouritesData = useSelector(state => state.favouritesData);
  const dispatch = useDispatch();

  const filteredData = searchText => {
    AXIOS_KIT('GET', SEARCH_CHARACTER_BY_NAME + searchText)
      .then(response => {
        setSearchedData(response.data);
      })
      .catch(error => {});
  };

  const isDataPresent = data => {
    const filterData = favouritesData.filter(
      ele => ele.char_id === data.char_id,
    );
    return filterData.length > 0 ? true : false;
  };

  return (
    <View style={[appStyles.flex1, appStyles.colorBlack]}>
      <View
        style={[
          {
            height: ScreenDimensions.SCREEN_HEIGHT * 0.15,
          },
          appStyles.colorGrey,
          appStyles.jCenter,
        ]}>
        <View
          style={[
            appStyles.flex1,
            appStyles.fRow,
            appStyles.jSpace,
            appStyles.aCenter,
          ]}>
          <TextInput
            value={searchValue}
            onChangeText={val => {
              setSearchValue(val);
              filteredData(val);
            }}
            style={[
              {
                height: ScreenDimensions.SCREEN_HEIGHT * 0.15,
              },
              appStyles.flex1Ninth,
              appStyles.FONT30,
              appStyles.mgL10,
              appStyles.colorPlaceholder,
              appStyles.lSpace2,
            ]}
            placeholder="Search"
            placeholderTextColor={appStyles.colorPlaceholder}
          />

          <TouchableOpacity
            style={[appStyles.flexP1, appStyles.pad10]}
            onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={30} color={'#D7DBDD'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[appStyles.flex1, appStyles.mg10]}>
        {getSearchedData.length > 0 && searchValue.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={appStyles.jSpace}
            data={getSearchedData}
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
        ) : (
          <View style={[appStyles.mgT20, appStyles.mgH10]}>
            <Text
              style={[
                appStyles.FONT24,
                appStyles.colorTextGreen,
                appStyles.lSpace1,
                appStyles.mgB5,
              ]}>
              No character found
            </Text>
            <Text
              style={[
                appStyles.FONT24,
                appStyles.colorTextWhite,
                appStyles.lSpace2,
              ]}>
              Try Again
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchCharacter;
