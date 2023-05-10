import {StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {VStack, View} from 'native-base';
import CustomText from '../../components/CustomText';
import colors from '../../themes/colors';

const HomeScreen = () => {
  const [dataWeather, setDataWeather] = useState<any>();

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
});
