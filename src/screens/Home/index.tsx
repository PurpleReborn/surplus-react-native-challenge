import {Dimensions, FlatList, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, VStack, View} from 'native-base';
import CustomText from '../../components/CustomText';
import colors from '../../themes/colors';
import ItemBalance from './components/ItemBalance';
import ItemFavorit from './components/ItemFavorit';

const WIDTH = Dimensions.get('screen').width;

const HomeScreen = () => {
  const [dataWeather, setDataWeather] = useState<any>();
  const [dataBanner, setDataBanner] = useState<any>([1, 2, 3, 4, 5]);

  const temp = dataWeather?.dataseries?.[0]?.temp2m || '-';

  const getWeather = () => {
    fetch(
      'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json',
    )
      .then(response => response.json())
      .then(data => setDataWeather(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <VStack flex={1} bgColor={'white'}>
      <ScrollView>
        <View
          bgColor={colors.green}
          pt={'24px'}
          pb={'36px'}
          px={'14px'}
          borderBottomRadius={'20px'}>
          <CustomText text={`Jakarta, ${temp} \u2103`} color={'white'} />
          <CustomText
            text={'Hi, User!'}
            size={24}
            style={{fontWeight: '500'}}
            color={'white'}
          />
        </View>
        <TextInput
          style={styles.topInput}
          placeholder="Mau Selamatkan makanan apa hari ini?"
        />
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={WIDTH / 1.4}
            decelerationRate="fast"
            data={dataBanner}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({item, index}) => (
              <View
                w={`${WIDTH / 1.4}px`}
                h={'160px'}
                bgColor={colors.greenDisabled}
                mr={'10px'}
                borderRadius={'10px'}
              />
            )}
            style={styles.bannerWrap}
          />
          <ItemBalance />
          <View px={'14px'} pb={'24px'}>
            <CustomText
              text={'Paling disukai'}
              size={16}
              style={{fontWeight: '500'}}
              color={'black'}
            />
            <CustomText
              text={'Nikmati menu terfavorit di Surplus!'}
              size={12}
              color={'black'}
              mt={6}
              mb={14}
            />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dataBanner}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({item, index}) => <ItemFavorit item={item} />}
              style={styles.favoritWrap}
            />
          </View>
        </View>
      </ScrollView>
    </VStack>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topInput: {
    marginHorizontal: 14,
    marginTop: -14,
    maxHeight: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: 'white',
    padding: 14,
    textAlignVertical: 'center',
  },
  bannerWrap: {
    marginLeft: 14,
    marginTop: 24,
  },
  favoritWrap: {},
});
