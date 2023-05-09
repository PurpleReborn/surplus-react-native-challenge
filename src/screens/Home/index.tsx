import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {VStack, View} from 'native-base';
import CustomText from '../../components/CustomText';
import colors from '../../themes/colors';
import axios from 'axios';

const HomeScreen = () => {
  const [weather, setWeather] = useState<any>();

  const getWeather = async () => {
    const url =
      'http://www.7timer.info/bin/api.pl?lon=106.8272&lat=-6.1751&product=civillight&output=json';
    try {
      const response = await axios.get(url, {
        headers: {
          'content-type': 'application/json',
        },
      });
      console.log('success', response);
      setWeather(response.data);
    } catch (error) {
      console.log('err', error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <VStack flex={1}>
      <View
        bgColor={colors.green}
        py={'24px'}
        px={'14px'}
        borderBottomRadius={'20px'}>
        <CustomText
          text={'Hi, User!'}
          size={24}
          style={{fontWeight: '500'}}
          color={'white'}
        />
      </View>
    </VStack>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
