import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {ScreenDimensions} from '../../utils/commonMethods';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import CharacterCard from '../../components/card';

const CharacterDetails = ({navigation, route}) => {
  const {data} = route.params;
  const characterData = useSelector(state => state.characterData);

  const filteredData = characterData
    .filter(ele => ele.char_id !== data.char_id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'black'}}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={{uri: data?.img}}
          imageStyle={{resizeMode: 'cover', opacity: 0.4}}
          style={{
            width: ScreenDimensions.SCREEN_WIDTH,
            height: ScreenDimensions.SCREEN_HEIGHT * 0.65,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 40,
              marginHorizontal: 15,
              paddingVertical: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={30} color={'#FFFFFF'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('favourites')}>
              <Image
                source={require('../../assets/icons/HEART_FILLED.png')}
                width={50}
                height={50}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 240,
                height: 300,
              }}>
              <Image
                source={{
                  uri: data?.img,
                }}
                style={{
                  width: 240,
                  height: 300,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 30,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                {data?.name}
              </Text>
              <Text
                style={{color: '#FFFFFF', fontSize: 18, textAlign: 'center'}}>
                {data?.nickname}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{color: '#18CA75', fontSize: 20}}>Portrayed</Text>
                <Text style={{color: '#FFFFFF'}}>{data?.portrayed}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 16}}>
                  {data?.birthday}
                </Text>
                <AntDesign
                  name="gift"
                  color={'#FFFFFF'}
                  size={16}
                  style={{marginLeft: 10, marginBottom: 3}}
                />
              </View>
            </View>

            <View style={{marginVertical: 10}}>
              <Text style={{color: '#18CA75', fontSize: 20}}>Occupation</Text>
              {data?.occupation?.map((ele, index) => (
                <Text key={'new' + index} style={{color: '#FFFFFF'}}>
                  {ele}
                </Text>
              ))}
            </View>

            <View style={{marginVertical: 10}}>
              <Text style={{color: '#18CA75', fontSize: 20}}>Appeared in</Text>

              <FlatList
                style={{
                  width: ScreenDimensions.SCREEN_WIDTH * 0.9,
                  marginVertical: 10,
                }}
                data={data?.appearance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      width: 100,
                      backgroundColor: '#242424',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 5,
                      padding: 5,
                    }}>
                    <Text key={'new' + index} style={{color: '#FFFFFF'}}>
                      {`Season ${item}`}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginVertical: 40,
            marginHorizontal: 15,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 26, color: '#FFFFFF'}}>
              Other Characters
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#FFFFFF',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 16, color: '#FFFFFF'}}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, marginVertical: 40}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={filteredData}
              renderItem={({item, index}) => {
                return (
                  <View style={{marginRight: 20}}>
                    <CharacterCard
                      data={item}
                      index={index}
                      onClickCharacter={e => {
                        navigation.navigate('CharacterDetails', {
                          data: e,
                        });
                      }}
                      onClickFavourite={e => {}}
                      showFavouriteIcon={false}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterDetails;
