import {Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from '../../../assets/surplus-logo.png';
import {View, VStack} from 'native-base';
import colors from '../../../themes/colors';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {isEqual} from 'lodash';

const RegisterScreen = ({navigation}: any) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [input, setInput] = useState<any>({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const validateSignup = () => {
    if (
      input?.email?.length > 0 &&
      input?.password?.length > 0 &&
      input?.passwordConfirm?.length > 0 &&
      isEqual(input?.password, input?.passwordConfirm)
    ) {
      console.log('ok');
      setIsDisabled(false);
      return;
    }
    console.log('no');
    setIsDisabled(true);
    return;
  };

  useEffect(() => {
    validateSignup();
  }, [input]);

  const handleChangeText = (text: string, stateName: any) => {
    setInput({
      ...input,
      [stateName]: text,
    });
  };

  const onSignup = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <VStack flex={1} px={'14px'} pb={'12px'}>
      <ScrollView>
        <View alignItems={'center'}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
        </View>
        <CustomText
          text={'Daftar'}
          size={26}
          style={{fontWeight: '500'}}
          color={colors.green}
        />
        <View pt={'24px'}>
          <CustomText text={'Email'} style={{fontWeight: '500'}} mb={4} />
          <CustomInput
            placeholder="Email"
            value={input?.email}
            onChangeText={(e: any) => handleChangeText(e, 'email')}
          />

          <CustomText
            text={'Kata sandi'}
            style={{fontWeight: '500'}}
            mb={4}
            mt={16}
          />
          <CustomInput
            secureTextEntry
            placeholder="Kata sandi"
            value={input?.password}
            onChangeText={(e: any) => handleChangeText(e, 'password')}
          />

          <CustomText
            text={'Ulangi Kata sandi'}
            style={{fontWeight: '500'}}
            mb={4}
            mt={16}
          />
          <CustomInput
            secureTextEntry
            placeholder="Ulangi Kata sandi"
            value={input?.passwordConfirm}
            onChangeText={(e: any) => handleChangeText(e, 'passwordConfirm')}
          />
        </View>
      </ScrollView>
      <CustomButton
        text="Daftar"
        mt={24}
        mb={12}
        disabled={isDisabled}
        onPress={onSignup}
      />
    </VStack>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo: {
    width: '60%',
    height: 160,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
