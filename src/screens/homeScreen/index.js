import React, {useState, useEffect} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import CharacterCard from '../../components/card';
import Header from '../../components/header';
import {AXIOS_KIT} from '../../utils/api';
import {GET_CHARACTERS} from '../../utils/constants';
import {
  saveCharacterData,
  addCharacterToFavourites,
  removeCharacterFromFavourites,
} from '../../redux/actions';

const HomeScreen = ({navigation}) => {
  const characterData = useSelector(state => state.characterData);

  const favouritesData = useSelector(state => state.favouritesData);

  const dispatch = useDispatch();

  useEffect(() => {
    AXIOS_KIT('GET', GET_CHARACTERS)
      .then(response => {
        console.log(response, 'response');
        const apiData = response.data;
        dispatch(saveCharacterData(apiData));
      })
      .catch(error => {
        console.log(error, 'error');
      });
  }, []);

  const iconSection = () => {
    return (
      <View
        style={{
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchCharacter')}>
          <Fontisto name="search" style={{color: 'white'}} size={22} />
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
        height={60}
      />

      <View style={{flex: 1, margin: 10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
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

// const mapStateTopProps = state => {
//   console.log(state, 'state');
//   return {
//     isClicked: state.MainReducer.isClicked,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     isClicked: data => {
//       dispatch({
//         type: 'IS_CLICKED',
//         payload: data,
//       });
//     },
//   };
// };

export default HomeScreen;
