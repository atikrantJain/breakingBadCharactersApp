import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import CharacterCard from '../../components/card';
import {ScreenDimensions} from '../../utils/commonMethods';
import {appStyles} from '../../utils/commonStyles';

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
      style={appStyles.colorBlack}>
      <View style={appStyles.flex1}>
        <ImageBackground
          source={{uri: data?.img}}
          imageStyle={appStyles.imageStyle}
          style={{
            width: ScreenDimensions.SCREEN_WIDTH,
            height: ScreenDimensions.SCREEN_HEIGHT * 0.65,
          }}>
          <View
            style={[
              appStyles.fRow,
              appStyles.jSpace,
              appStyles.mgT40,
              appStyles.mgH15,
              appStyles.padV10,
            ]}>
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

          <View style={[appStyles.flex1, appStyles.jEnd, appStyles.aCenter]}>
            <View style={appStyles.imageDimensions}>
              <Image
                source={{
                  uri: data?.img,
                }}
                style={[appStyles.imageDimensions, appStyles.borderRadius10]}
              />
            </View>
            <View style={appStyles.mgT10}>
              <Text
                style={[
                  appStyles.colorTextWhite,
                  appStyles.FONT30,
                  appStyles.tCenter,
                  appStyles.fW700,
                ]}>
                {data?.name}
              </Text>
              <Text
                style={[
                  appStyles.colorTextWhite,
                  appStyles.FONT18,
                  appStyles.tCenter,
                ]}>
                {data?.nickname}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={[
            appStyles.fRow,
            appStyles.jSpace,
            appStyles.mgV15,
            appStyles.mgH15,
            appStyles.flex1,
          ]}>
          <View style={appStyles.flex1}>
            <View
              style={[
                appStyles.fRow,
                appStyles.jSpace,
                appStyles.mgV10,
                appStyles.flex1,
              ]}>
              <View style={appStyles.flex1}>
                <Text style={[appStyles.colorTextGreen, appStyles.FONT20]}>
                  Portrayed
                </Text>
                <Text style={[appStyles.colorTextWhite]}>
                  {data?.portrayed}
                </Text>
              </View>

              <View
                style={[
                  appStyles.fRow,
                  appStyles.jEnd,
                  appStyles.aEnd,
                  appStyles.flex1,
                ]}>
                <Text style={[appStyles.colorTextWhite, appStyles.FONT16]}>
                  {data?.birthday}
                </Text>
                <AntDesign
                  name="gift"
                  color={'#FFFFFF'}
                  size={16}
                  style={[appStyles.mgL10, appStyles.mgB3]}
                />
              </View>
            </View>

            <View style={[appStyles.mgV10]}>
              <Text style={[appStyles.colorTextGreen, appStyles.FONT20]}>
                Occupation
              </Text>
              {data?.occupation?.map((ele, index) => (
                <Text key={'new' + index} style={appStyles.colorTextWhite}>
                  {ele}
                </Text>
              ))}
            </View>

            <View style={[appStyles.mgV10]}>
              <Text style={[appStyles.colorTextGreen, appStyles.FONT20]}>
                Appeared in
              </Text>

              <FlatList
                style={[
                  {
                    width: ScreenDimensions.SCREEN_WIDTH * 0.9,
                  },
                  appStyles.mgV10,
                ]}
                data={data?.appearance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View style={appStyles.seasonBlock}>
                    <Text key={'new' + index} style={appStyles.colorTextWhite}>
                      {`Season ${item}`}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </View>

        <View style={[appStyles.mgV40, appStyles.mgH15]}>
          <View style={[appStyles.flex1, appStyles.fRow, appStyles.jSpace]}>
            <Text style={[appStyles.colorTextWhite, appStyles.FONT25]}>
              Other Characters
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={appStyles.viewAllBtn}>
              <Text
                style={[
                  appStyles.tCenter,
                  appStyles.FONT16,
                  appStyles.colorTextWhite,
                ]}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[appStyles.flex1, appStyles.mgV40]}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={filteredData}
              renderItem={({item, index}) => {
                return (
                  <View style={appStyles.mgR20}>
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
