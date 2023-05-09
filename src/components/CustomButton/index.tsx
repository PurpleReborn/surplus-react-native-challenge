import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import colors from '../../themes/colors';

const CustomButton = ({
  text,
  bgColor,
  mb,
  mt,
  disabled,
  onPress,
}: {
  text: string;
  bgColor?: string;
  mb?: number;
  mt?: number;
  disabled?: boolean;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          backgroundColor: disabled
            ? colors.greenDisabled
            : bgColor
            ? bgColor
            : colors.green,
          marginBottom: mb ? mb : 0,
          marginTop: mt ? mt : 0,
        },
        styles.wrapper,
      ]}>
      <CustomText
        text={text}
        style={{fontWeight: '500', textAlign: 'center'}}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderRadius: 24,
  },
});
