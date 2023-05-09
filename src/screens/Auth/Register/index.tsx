import {Image, StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';
import Logo from '../../../assets/surplus-logo.png';
import {View, VStack} from 'native-base';
import colors from '../../../themes/colors';
import CustomText from '../../../components/CustomText';

const RegisterScreen = () => {
  return (
    <VStack flex={1} px={'12px'}>
      <View alignItems={'center'}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      <CustomText text={'Register'} />
      <View py={'12px'}>
        <TextInput style={styles.input} multiline={false} placeholder="Email" />
      </View>
    </VStack>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: 200,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.grey,
    paddingHorizontal: 12,
    height: 52,
    borderRadius: 6,
    fontSize: 16,
  },
});
