import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ScreenDimensions} from '../../utils/commonMethods';
import Entypo from 'react-native-vector-icons/Entypo';
import CharacterCard from '../../components/card';
import {AXIOS_KIT} from '../../utils/api';
import {SEARCH_CHARACTER_BY_NAME} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCharacterToFavourites,
  removeCharacterFromFavourites,
} from '../../redux/actions';

const SearchCharacter = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [getSearchedData, setSearchedData] = useState([]);

  const favouritesData = useSelector(state => state.favouritesData);
  const dispatch = useDispatch();

  const filteredData = searchText => {
    AXIOS_KIT('GET', SEARCH_CHARACTER_BY_NAME + searchText)
      .then(response => {
        console.log(response, 'resp');
        setSearchedData(response.data);
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };

  const isDataPresent = data => {
    const filterData = favouritesData.filter(
      ele => ele.char_id === data.char_id,
    );
    return filterData.length > 0 ? true : false;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          height: ScreenDimensions.SCREEN_HEIGHT * 0.15,
          backgroundColor: '#242424',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            value={searchValue}
            onChangeText={val => {
              setSearchValue(val);
              filteredData(val);
            }}
            style={{
              flex: 0.9,
              height: ScreenDimensions.SCREEN_HEIGHT * 0.15,
              fontSize: 30,
              marginLeft: 10,
              letterSpacing: 2,
              color: '#D7DBDD',
            }}
            placeholder="Search"
            placeholderTextColor={'#D7DBDD'}
          />

          <TouchableOpacity
            style={{
              flex: 0.1,
              padding: 10,
            }}
            onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={30} color={'#D7DBDD'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, margin: 10}}>
        {getSearchedData.length > 0 && searchValue.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
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
          <View style={{marginTop: 20, marginHorizontal: 10}}>
            <Text
              style={{
                fontSize: 24,
                color: '#18CA75',
                letterSpacing: 1,
                marginBottom: 8,
              }}>
              No character found
            </Text>
            <Text style={{fontSize: 20, color: '#FFFFFF', letterSpacing: 2}}>
              Try Again
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchCharacter;
